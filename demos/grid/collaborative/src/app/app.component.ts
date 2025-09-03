import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GetData } from '../assets/data';

import {Smart, GridModule, GridComponent } from '@smart-webcomponents-angular/grid';

import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ ButtonModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  @ViewChild('grid1', { read: GridComponent, static: false })
  grid1!: GridComponent;

  @ViewChild('grid2', { read: GridComponent, static: false })
  grid2!: GridComponent;
  
  columns = this.getColumns();

  properties = this.getProperties();

  private editingCells: Record<string, boolean> = {};

  private db: ReturnType<typeof getFirestore> | undefined;

  private gridData: any[] = [];

  ngAfterViewInit(): void {
    this.initFirebaseAndGrid();
  }

  private getColumns() {
    return [
      {
        label: 'ID',
        freeze: true,
        dataField: 'id',
        width: 30,
        dataType: 'number',
        allowEdit: false,
      },
      { label: 'Name', dataField: 'name', dataType: 'string' },
      { label: 'Email', dataField: 'email', template: 'email', dataType: 'string' },
      { label: 'Department', dataField: 'department', dataType: 'string' },
      { label: 'Salary', dataField: 'salary', cellsFormat: 'c2', dataType: 'number' },
      { label: 'Age', dataField: 'age', dataType: 'number' },
    ];
  }

  private getProperties() {
    return {
      selection: {
        enabled: true,
        allowCellSelection: true,
        mode: 'extended',
        allowColumnHeaderSelection: true,
        allowRowHeaderSelection: true,
      },
      editing: {
        enabled: true,
      },
      behavior: {
        rowResizeMode: 'growAndShrink',
        columnResizeMode: 'growAndShrink',
      },
      dataSourceSettings: {
        id: 'id',
      },
      appearance: {
        allowHover: true,
        displayLoadingIndicator: true,
        showRowHeaderEditIcon: true,
      },
      columns: this.columns,
    };
  }

  private async initFirebaseAndGrid() {
    // --- Firebase config ---
    const firebaseConfig = {
      apiKey: '',
      authDomain: '',
      projectId: '',
      storageBucket: '',
      messagingSenderId: '',
      appId: '',
    };

    // Initialize Firebase app
    const app = initializeApp(firebaseConfig);
    this.db = getFirestore(app);

    // Sample data
    const sample = [
      {
        id: 1,
        name: 'Alice',
        age: 25,
        email: 'alice@example.com',
        department: 'Engineering',
        salary: 55000,
      },
      {
        id: 2,
        name: 'Bob',
        age: 30,
        email: 'bob@example.com',
        department: 'Marketing',
        salary: 60000,
      },
      {
        id: 3,
        name: 'Charlie',
        age: 35,
        email: 'charlie@example.com',
        department: 'Finance',
        salary: 75000,
      },
      {
        id: 4,
        name: 'Diana',
        age: 28,
        email: 'diana@example.com',
        department: 'Human Resources',
        salary: 52000,
      },
      {
        id: 5,
        name: 'Ethan',
        age: 32,
        email: 'ethan@example.com',
        department: 'Engineering',
        salary: 67000,
      },
      {
        id: 6,
        name: 'Fiona',
        age: 27,
        email: 'fiona@example.com',
        department: 'Design',
        salary: 58000,
      },
      {
        id: 7,
        name: 'George',
        age: 40,
        email: 'george@example.com',
        department: 'Management',
        salary: 90000,
      },
      {
        id: 8,
        name: 'Hannah',
        age: 22,
        email: 'hannah@example.com',
        department: 'Support',
        salary: 48000,
      },
      {
        id: 9,
        name: 'Ian',
        age: 29,
        email: 'ian@example.com',
        department: 'Engineering',
        salary: 62000,
      },
      {
        id: 10,
        name: 'Julia',
        age: 33,
        email: 'julia@example.com',
        department: 'Sales',
        salary: 70000,
      },
    ];

    if (!this.db) {
      console.error('Firestore not initialized');
      return;
    }

    const collectionRef = collection(this.db, 'gridData');

    // Clear existing documents in 'gridData' collection
    const snapshot = await getDocs(collectionRef);
    const deletePromises = snapshot.docs.map((docSnap) =>
      deleteDoc(doc(this.db!, 'gridData', docSnap.id))
    );
    await Promise.all(deletePromises);

    // Insert sample data
    for (const row of sample) {
      await setDoc(doc(this.db, 'gridData', String(row.id)), row);
    }

    // Listen for updates
    const q = query(collectionRef, orderBy('id'));

    onSnapshot(q, (snapshot) => {
      snapshot.docChanges().forEach((change) => {
        const data = change.doc.data();
        const rowIndex = this.gridData.findIndex((r) => r.id === data.id);

        if (change.type === 'added') {
          this.gridData.push(data);
        } else if (change.type === 'modified') {
          if (rowIndex !== -1) {
            this.gridData[rowIndex] = { ...this.gridData[rowIndex], ...data };

            // Update only modified cells if not being edited
            [this.grid1, this.grid2].forEach((grid) => {
              this.columns.forEach((col) => {
                const key = col.dataField;
                const cellKey = `${data.id}-${key}`;
                if (!this.editingCells[cellKey]) {
                  const currentValue = grid.getCellValue(data.id, key);
                  if (currentValue !== data[key]) {
                    grid.setCellValue(data.id, key, data[key]);
                    grid.clearSelection();
                    grid.flashCell(data.id, key);
                  }
                }
              });
            });
          }
        }
      });

      // Initial load
      if (!this.grid1.dataSource?.length) {
        this.grid1.dataSource = [...this.gridData];
        this.grid2.dataSource = [...this.gridData];

        this.grid1.appearance = {
          ...this.grid1.appearance,
          displayLoadingIndicator: false,
        };
        this.grid2.appearance = {
          ...this.grid2.appearance,
          displayLoadingIndicator: false,
        };
      }
    });

    // Attach event listeners for cellValueChanged
    this.grid1.addEventListener('cellValueChanged', (event: any) =>
      this.onCellChange(event)
    );
    this.grid2.addEventListener('cellValueChanged', (event: any) =>
      this.onCellChange(event)
    );
  }

  private async onCellChange(event: CustomEvent) {
    if (!this.db) return;

    const { row, dataField, value } = event.detail;
    const cellKey = `${row.id}-${dataField}`;
    this.editingCells[cellKey] = true;

    try {
      await updateDoc(doc(this.db, 'gridData', String(row.id)), {
        [dataField]: value,
      });
    } catch (error) {
      console.error('Error updating document:', error);
    } finally {
      delete this.editingCells[cellKey];
    }
  }
}