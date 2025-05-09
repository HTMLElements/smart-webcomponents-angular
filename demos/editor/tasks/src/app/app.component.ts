import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { ButtonComponent } from '@smart-webcomponents-angular/button';
import { CheckBoxComponent } from '@smart-webcomponents-angular/checkbox';
import { EditorComponent } from '@smart-webcomponents-angular/editor';
import { EditorModule } from '@smart-webcomponents-angular/editor';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ EditorModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent  {
    @ViewChild('editor', { read: EditorComponent, static: false }) editor!: EditorComponent;

     users = [
        {
            id: "101",
            name: "Anna Petrov",
            image: "https://randomuser.me/api/portraits/women/65.jpg",
            color: "#6E27DE"
        },
        {
            id: "102",
            name: "Liam Thompson",
            image: "https://randomuser.me/api/portraits/men/32.jpg",
            color: "#63D970"
        },
        {
            id: "103",
            name: "Elena Ivanova",
            image: "https://randomuser.me/api/portraits/women/12.jpg",
            color: "#F39C12"
        },
        {
            id: "104",
            name: "James Carter",
            image: "https://randomuser.me/api/portraits/men/74.jpg",
            color: "#3498DB"
        },
        {
            id: "105",
            name: "Natalie Georgieva",
            image: "https://randomuser.me/api/portraits/women/43.jpg",
            color: "#E91E63"
        }
    ];
}