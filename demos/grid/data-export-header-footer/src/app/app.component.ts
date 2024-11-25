import { Component, ViewChild, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Smart, GridComponent } from '@smart-webcomponents-angular/grid';
import { GetData } from '../assets/data';
import { RouterOutlet } from '@angular/router';
import { GridModule } from '@smart-webcomponents-angular/grid';
import { ButtonModule } from '@smart-webcomponents-angular/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, ButtonModule, GridModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements AfterViewInit, OnInit {
	@ViewChild('grid', { read: GridComponent, static: false }) grid!: GridComponent;


	ngOnInit(): void {
		// onInit code.
	}

	ngAfterViewInit(): void {
	}
	
	generateData = (length: number) => {
		const sampleData = [], firstNames = ['Andrew', 'Nancy', 'Shelley', 'Regina', 'Yoshi', 'Antoni', 'Mayumi', 'Ian', 'Peter', 'Lars', 'Petra', 'Martin', 'Sven', 'Elio', 'Beate', 'Cheryl', 'Michael', 'Guylene'], lastNames = ['Fuller', 'Davolio', 'Burke', 'Murphy', 'Nagase', 'Saavedra', 'Ohno', 'Devling', 'Wilson', 'Peterson', 'Winkler', 'Bein', 'Petersen', 'Rossi', 'Vileid', 'Saylor', 'Bjorn', 'Nodier'], petNames = ['Sam', 'Bob', 'Lucky', 'Tommy', 'Charlie', 'Olliver', 'Mixie', 'Fluffy', 'Acorn', 'Beak'], countries = ['Bulgaria', 'USA', 'UK', 'Singapore', 'Thailand', 'Russia', 'China', 'Belize'], productNames = ['Black Tea', 'Green Tea', 'Caffe Espresso', 'Doubleshot Espresso', 'Caffe Latte', 'White Chocolate Mocha', 'Cramel Latte', 'Caffe Americano', 'Cappuccino', 'Espresso Truffle', 'Espresso con Panna', 'Peppermint Mocha Twist'];
		for (let i = 0; i < length; i++) {
			const row: any = {};
			row.firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
			row.lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
			row.birthday = new Date(Math.round(Math.random() * (2018 - 1918) + 1918), Math.round(Math.random() * 11), Math.round(Math.random() * (31 - 1) + 1));
			row.petName = petNames[Math.floor(Math.random() * petNames.length)];
			row.country = countries[Math.floor(Math.random() * countries.length)];
			row.productName = productNames[Math.floor(Math.random() * productNames.length)];
			row.price = parseFloat((Math.random() * (100 - 0.5) + 0.5).toFixed(2));
			row.quantity = Math.round(Math.random() * (50 - 1) + 1);
			row.timeOfPurchase = new Date(2019, 0, 1, Math.round(Math.random() * 23), Math.round(Math.random() * (31 - 1) + 1));
			row.expired = Math.random() >= 0.5;
			row.attachments = [];
			const maxAttachments = Math.floor(Math.random() * Math.floor(3)) + 1;
			for (let i = 0; i < maxAttachments; i++) {
				row.attachments.push(`https://htmlelements.com/demos/images/travel/${Math.floor(Math.random() * 36) + 1}.jpg`);
			}
			row.attachments = row.attachments.join(',');
			sampleData[i] = row;
		}
		return sampleData;
	}

	behavior = {
		columnResizeMode: 'growAndShrink'
	}
	
	sorting = {
		enabled: true
	}
	
	dataSource = new Smart.DataAdapter({
	    dataSource: this.generateData(50),
		dataFields: [
			'firstName: string',
			'lastName: string',
			'birthday: date',
			'petName: string',
			'country: string',
			'productName: string',
			'price: number',
			'quantity: number',
			'timeOfPurchase: date',
			'expired: boolean',
			'attachments: string'
		]
	})

    dataExport = {
		headerContent: [
        {
            style: {
                backgroundColor: '#fafafa',
                color: '#000000',
                height: 50,
                mergeAcross: true,
                verticalAlign: 'middle',
                textAlign: 'center'
            },
            cells: {
                firstName: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARIAAABFCAYAAACGy2nYAAAgAElEQVR4nO1de5gUxbVv8I1GxcSrQSK7Xd3ViyvrblcvSDS6RmJ2QEV2dpKIIo+pmQALMSTqTg3sdN3k5poETa65MQnmoV5jTGZ5w7Lbyy4bE2OiIfEV8JmIwM6ixheivMS+f0zP0l3TPd09O8ui9O/76vvmm6k6daqm69dVdU6d4rgAXKTntdOmalsXX7PhN3cMtS4BAgT4iCHcvqMq3Jn5v9CG5w58bu2KvU1dV35yqHUKECDARwB1PfrxjZ19kbCWeSSsZfQr1z+tX7RyjR7rnr50qHULECDAUY7rezKfatR6aaPW1xvWMnqD1qtPXPOoDpev1G/S5u2Ob5x0xlDrGCBAgKMUDRt3XRzWMumwltkX1jJ6WMvo13Vs16tXdukg3apf13673tRdv2So9QwQIMBRhvhm/YTGjr6bwlpmc448cmlK+z/1C5av0/l0Wr987QN6U3fo1fk9dacNtc4BAgQ4ShDp3nFeuLPvu2Et08cSSFjL6Fe1bdVh60qdT6d1eeUqfX73FL1pU/2tQ613gAABjgI0dPZeYixf9tsRSFjL6JeufVwH6VadT6f1sctX67hrht7UHdo5q6fu5KHWP0CAAEOEWT0vnxzWMnG75Ys5TevYqaNVPTqfTut8Oq0Lrcv167WE3tQd0hd0hxYOdTsCBAgwBJiq9X4m3Nn33UYts6sQgYS1jH5t+8t65YoN/STCp9N6fdsyvak7pDdtCm1fuCF00lC3J0CAAEcQ4Y7eScby5YAbgYS1jF6/4XldWr7aQiIXr2nNkkh3SF+wKRQf6jYFCBDgCOCadZkRxvLlb17II5fq1j/Zvx+SSxeuWKPP7QrniOSl+GZ0wlC3L0CAAIOIhrbMmLCWuSusZd7yQyANHTv12tV/sBAIn05nnc42zuufjTR11c8sVrdr1mVGhLte5c0pkt5yYrHyBAEBAJWbgKTcxkN0J4DKMgDRHUBEt/CSfAPPo/P9yoSwlgcVMsqlsrLqM4vRrVySq8xy+LHVYjFy+Ao0LidDEJBs/m3hhtDp87qm8OZE05Gi+9MJkjS+3NyWqqqqU0tdR4CjAbo+LLt86V0X1jKH/BBIWMvoUzu269UrO/NIBKRb9Wnttx8mke7Q1kg6clyxajZ09E1h645s3DXOjwy+YjwEEP2Ih+hfACLdQ3oOSMr3y8fWjPEiX4AKtZQXkW+HOwgvOg9A9CGjxw6/ckZXTjwLQPTBYRnKX82/N3WH5pn+m+yyc+NkX/3pBTxUHjC3RRDki0tdR4AhxAxt16nhzszNYS3zrF/y6Hcy2/CiXmE4mbHp8rUPWh7Spq76rwxE34EQCULoBACV7wCIDnokEDbt5SFKcBw3vFA9QFIuMZfjofKw33YKEGE7HcolRfIlR1IaLQMYov80/x4QSYABIaLtKjeWL28XSyBhLaNPWv+MLrSusCWRmpWr9XndV5se0slPcjo3bCB6F0sk548bNxJA9McCJLEDQPRnAOWNAKLNAKJdBfK2VVZWOnrj1tXVHQ8getuUf3+h/HYAorzGrm4Byk2+5EB0T6EBHBBJAP/Q9WFhrfeasJbZWMzyxbIfYhy6syMQPp3WK5av1qMbb7Q+oF2h6wbahGKIZPToiacIED1mMzBf5yV0c1lFdZldOUGoreShrAKIdueVleTfc5zzEg1AtIqZlUz22sZRo9AIANH7DiS2yqscQ49tprKvcsxsKiCSwUP2f5S/DCpkNNS6lASRntdOC3dmbg53ZJ4fCHnk0nUdO3R51SZHEhFal+vXdzRblzTdkx8rRVuK2WwVRPmXNgNyfUXFeE/xT8aMRZ8GED2SJ6PA3geAygImv+egTQAqIabsdtPnNwsRmBn82GqRkfMbNs+R2mw9logEVMgIQPQbHqI9ACKdF9H0odZpQJi2MTM2rGWWhbXMO6UgkLCW0a9u/5deuXy9I4nw6bQeavu5nveW6w6FhqIPgISuYAmAl5S1lZWVvgaLIEw4HUD5cUbWATBWudAuf94gFtEznnXOWo76ywERfauYQQhEtNDabvkGrzqUGscUkTD/10eTSEq4fGHTVW3P6qJx6M4pTVy9Qm/qnswSie/NxlIBQKWdGfw7BWHC6cXIKh9bMwZA9K5Vnvx/znWjf5ryfjhmLPq0h2qGAYgyh/dE0O2CUHu5dVmFWrzoK0C0zlTug9GVE8/y3NgSIyCSjwimr39lZGNHb3NY63uxlOSRS5eufVznGSczNo1bsVaf29VoNxv5/FD0iSSNLwcQHbJuViI8EJlAQt9miGkvAFX/YZvXPLOASBegMsNVfnZabCIN5ZLKysoTzQTmxQokCMJJuam1IefRYtpbKgREcpQj3NFXaSxfdg8GgTRovfr41Q8XJJCc09nMzgV5JNLUHeoeqr4BIlrCDPrdA3WEMsjpQ+ZBmWuXlzW9Aojud5PP+KC8ntsPAVDeYPre1QokVCh1xcxiikFZZe25PKyt5WHtpKzTW83ZbJ4BEslwQVBqeFFuAFCO8yKaDiR0hSRd8okSNiO7uS6i6bwkfx2I6BYAlZt4iC4dPXriKX7klIJIBAEBQVKm8pIyB0A5LkCEi9GlICJp/Thz3NPBStd2bNPHrWh3JRGQbtUbOpbakYg+v3vKZ0vW8Gzrj2MG54tOOfOXNc7LED8AEP3ZMihE9Gu7fGVl1WcCizMY6uW4wuZvIKG/2REPgOiblofTxQrEQ/TflrYXsBww/fm0S/M5juM4SbrkE0BCLQCifzDldQDRISCiHgDlaYf18U8kZWXVZwIJLQUQvW5Thw4gOsBLSBOE2sps38k/My8lvWxKC4JwUpY00A6HOnQA0QFBQg/yFeOhnQwI0acKlLVNPI/yQotWVlaeZlgJdzqWy84y75ek8eVubXPEtK6dn8wuXzL/HEwCCWv2h+6cUt3ahxxIJLSh6MY6wjORDAdWXw7HmYNf8FD+AfO2f8U5L/qLdQBlH3o7CMKE0ebZjiChSO63clhzkfWBkn9QSEeQ9YXxRGB+iaQcyp8Dhf1sLOQ9evTEU/wSCV+BxgGIej0OzH2ChCKCiH5t+u5tt3YAIAsCRM/6IID3AVRuYuWUgkhEsbYaQPSyZxkSeo8X0RS3NlqQu7YhrGX2DjaBhLWMfsW6J3ShdbknEkGr1upN3dfaEcmH8zZNGQT7uTciMZYgls4v1bocQDSTlT1qFBphm5ed5kroZie5vIjmmvLuZzaFhwGI+rwMeACq/gNY94budWmPZyIRxZrLgITeY8q8DSR0Fy/KDeWi8gVBUqJAkn9v+n0VgOg3Xv8Lw+L1JlPHBwDKD/Eims7D2kkAKiFBVH4IDu8dvQ9E9IIpf8HjBNkzVsxMR0J/AyJaWA7lzxl7VdfxkrI2jwRE5XqzLGPmudmUMpb82aMY5t83m5emxrPKtne7ANF3AVQW8BK6mYfKj9k8PER7BAGBQu3Mu7bhSKQGrVefsOYRTwTCp9P62BVr9GjnTKfZiC/HKe/wRiS8VKOwD4Ak1YwqhQZ5+w8Q6QDUfsYur/H2Nudd7yQXQNR2OJ/SZfO7eTA6WoF4UbneMmgl+UuF2uOVSARhwulAQq8w+f/s1K+8iKYDiA7kiNELkWS9gpW/MnW8KghKjV1+CC86j1kO5tLLBZo8nIfKwwyJfJtzOPogSPKXgPlYhYTeE4QJo52E+90jARCtZHS/1849wdYFQVK+byuUvbbhSKWpHdv16lUbPZOIkF6uf0VbYksiTd2hQ3N7ptj6VwwcHokE1k5iHy6/bupOEASlhpVdLslVdnkNd/l3THnfRSg/hEJVVdWpAKK9/Q+fJH89r15JiTIEcaNdnQCie035Dtitx5n8nojEOKdkzvu8m2xmluVKJAAqX2HyHhKEmomF6qioGP9JwCyDeIj+VaC91zF1uG6C8xClrGXk/3WU74NIjNnjQbPeds9HDuWi8gUrkci/t2SIdO6sNpYv+44kgYS1jD6l/SV97PK1nkkk63T2SycS0edvCv3W7Y8pHh6JRFTC7APJuWx0egUAssAODB6iSx3zM+dmyqH8OTaPIClTzXkgrOXz2sSj85l677Opbph5UHkxFXshEsME/SrzFr/CTbahz5/Z/nIkEkl51EqWyq881MEJUJnhmUhE1GHKux/Ci85zlZ+djZmXdLs4h+fJD5GIYs1lDEFtLKRH9syYvLE/SfLPOI7juMiGvgvCWkYLa5kPjzSBhLWMPqntH7qQtj9055QuXr3azukslw42dU223d0uDbwRCYDyNPbhLcT0fiAINRfkE0ltrVP+PHd5EX2LzcND9AtTnq2Osqz7AL15v49VLmQGVMKtPV6IxMZD2FFHG/kzvRCJJF3yCWC1cnne1xIE4SRgmvk5Ecno0RNPsc4AvJ/MBhB1m3Urg6jCNp8PIuFhzZWW9kL0hkfHRSvim/UTwlkv1CNOIp9d8xdfBMKn03rVirXmSGf5aVPoPt+d4AseicTGNd7r2Ro3iCKawMoWRXmsU/5ySZGsb/I857Dhlre907qX4zhBRD8pVC9gzMROSy6mjCuR8BJqZsjwf9zk5mCcvLb43tgRBJDkzzO6vMW5hGywtkPpciMSUFH7WWZW9VPv8tF9lr4VlS/Y5vNBJGWVteeyfQMg2saLaLrTBr4jbtjwxulhre+pI0Ug0zRrZHevCbau1Gd2LnQmke7Q/rk99WW+Gu8b3ojEbh+j2AhjLGwO1elubvfAato7aN5bKIfKeCs51FzmJCdvySYiSyR+y7S9gFma0c19RgLR/Za+lJQ5XmSbyr/oRiS8JN/AtK3HZx39IROciMQmzstTWQ9kLwltsZaVv2yrh+/NVuW37PNk/H/vAYjagIgWeo5DE+necV5Yy+wYbBK5pv1feuWKNt8kAtKtekP7HYVIRG/qCi3z1NgBwRuRGBHG2D9nwGEMOC7/rQ+yx/PdyvzcSRfG7f7fhRyp8pzcRHlN7jdj2r7XJOsej+3xMCOxmkEFSbnWi+wcBIg6XWckzBJQkOTlfuoAEN3hOiPJOp/lD9oikuNmt08iMZmP3ep8WRDRT3ipRinYEQ0dGTmsZd4dLBL5YttWHS5f5ZtE+HRar1v3u8Ik0h3aN1+7ytYEWlr48Wxl7fmyWgoNGMcnXYBonWuZrAnRpIvyY5OeT/XLcvCSNYMxAe7O7f0IArqKeWNOc5Nl1O8+IxFRj5UI0FVeZOfAi6jVjUh4Cc2zDlT0oK86sr4WbkTyLaa9A0m2L6ZiXORHjUIjjHKveatbfrzg/lGj1hcKa5mDpSaRy9Zu1t0O3Tk7na3T59s7nZnTjzz/4wOCLyJJs50/0NoN68W/rXKVBW7lDBOl2UnseY7juLKK6jJGlmsoyjwzrKRcwnEcZ7iT577f59Xc7ZFIzJYOnReVsBfZOQiSvNyVSLJ+J4frkJS1fuoAUH7IN5GI6BZzUGo/yWk5O5CzNnV1dcfzUJnMQ/QLZmPdLu3jYc2VjsIaOzO4VATSoPXaRnb37HS2fI0e7ZrlRiLvze+ZfK7XzhoYvBMJL6Gb2c53Oi/hFbwoX83I/KCQc5IZrDNRWUV1mQDlJtN3rj4fHJe/KZmbaQGInjYRUp5Dm7NeHojENEiNweHruIF5I9SJSPJNod4tQ0Y7thzuE8c9km9Y9JCURj91eNKjhKd/yyprzxUkpRFI6C5gDXCVSzsKxtYJa5nbB0oiU9u36eNWdhRNIlmnsxY3EtHnd4eWFttR/uGdSCSpZhRgzIkDPLg3HED5T9YH0fs6HkjyfzEPcdTypve4uSgIwkmMT8Mfjbaad/+/6VkvD0SSddc2z4IM/wXvdVgOxdkRSWVl5WnM/3WovHzCOZ7kg9rPANOMz5FIJPlGZtbja9PYky6DFkYgchyQlO/nkYkk1zuX0fVhhoNaUSQS2vCCLrV6O3Tn7HT2K1cSaeoO7Y73XPOp0nSUx870SCQcl/8mBRB9yMPaScXUbOOlub+Q2ZdFXoAiiNYDiPYVM/h5CWmmcgfZaGh+9PJEJJJyrU2/e3LwMwJCWR5+Z89WJqSlx6s88gavA5GIojyW0cVzCEwjxEPaSI7esL7MvxXVZTysnZRLHpzjhgOIXmLaUPi5iaS3nBju6OvySyJXrH/S86E7pzSxsNOZKU3+tkvDSwx/RGIcAGMDKb/t9wCfYXY9YJYjQDnpR0ZesCHGf8DP4OchSjBtOvzG92j2zcELkRiWBUs/2nnoOujKuJcXdJG/iSGEPW6mT+OeoveZck6ercOB9bDe85w3X5VhwHq833lvzo+LPGsBFOVb3RQxbjrwVYaLbHzzjLCWedoPkVy+7u95V2b6cjpbuU6f2xXxMht5M75xkuuavrTwRyQcZxuIWQcQvStA9I26urrjC5Wtqqo6FYjy9wBzFw4volbOh7PUYV3Qehtdcg+0ZwgCkh3k6DxEd/vUyZVIOC7P+1YXIHrMLeaH4db/DqujE5EYm9l/Z0nS6dCe4S+UF0uksIu8/D1LXgnNK9QGjrP1HbrPWT4TY7fAFSIscQKI/lBIj7KyupMBc1TB8z7Pde19ZWEt03ckyAS2rtRndX7NC4no8zeFBi3qljP8EwnHcRwP0d0OA+9lHqK7eRFNF4Tay0GFjIwDfzNB1pPxVZsy7/MQ3SlA9F02cS7kYrcBbDz4d/rsiOHAwVTIi/LVfgR5JRLj6D0Tsxbd70TGRpyOp+x0zFma7FAGUQXID2b0AYDKbwWozBAkFAFQjgsSehDkZonZvSbXPZKsXhedx5DbfiDKsxz7JxtSwBJ/RRBqL3fMnw34ZBrozvtoeV7PsP8Ss7znyC6uC4DofV8xiCNaBoV9+phcvu4Jn2TSqje03+WJRJq6Q6/O76kryWlafyiOSDiOG2ZsdrLuyCVNbm9omzW6MbA8HYCzAED0OzuS8x0a0CORcBzHAVGeldeHkvIoL6IpuXoFYcLp2RCBhh+PiF5gAlG7ttcIOvSklz7nRdTKOuoVIhKOs/GizZZ5QoByUpBQRJBQhBfRXMNs/QGT7xeFZStz8vVU/gogutfwkLWEkmBit+TS3wWoUEGSbzTCLN4J7F5qIrqlkC62CHf2TfbrY+KHTK5Y1+qVRPSmTfXu67JBQdFEwnFc/4YnO3U+YkTCcRwH8s14b7otsezlyHGbB7bdvxzvRMJx/Y5jh2zafwgwUekARNskaXw5ENH/WAe/3OBBteGCJH/JGMzsDOUtHioPAEnuDyzuh0g4rj8swz6bdhRIygq3w5/GjGdvATl7LXpkZ3p2pt3CBJp1aizuRHu4IxPzu/la54FMlNXr9abuqV6JZOeiRyOlC0LrCwMjEgPDDH+Qe4v5AwdKJPkXdskPFdEGDsJa3uYN9TW/cvwSCccZ54OYI/9MOihIyq9yfjFs9H0v+xIsqqqqTpWk8eXnjxs30qEd5pmDp+fCOMn9OwdiNPfrC8YNBJ4GrhFcKv+GRhsi4bhcAG30C5voc3ZpizkMZ9Fo7Oj7XinJpHLFOj22MepnNuL7YS0dSkIkFggCAqJYc1nWMiPHAZRjgoQiPKydVC7JVWPGok+fP27cSC/JS31lZXUnm8sMJDI4W38xoRIgrOVzyatzXQ6CgAAvornZYNPKMiChpQKUm9ij8Gyby8rqTvarZyFkL4i3PBeb/ZQ/f9y4kbyIpvASas7G5FWW8VD+AS/JXzcCZ/t+85eVVZ9pEMo3BYhuFyD6T0FSoqJYW+1UZtQoNCIbvEhZYIRaXAagskyA6HZBUqJ8BSrhdaq6PiysZR4oBZmIrSv06zXqg0RC2xduCJ1Uusb4gxFxrKREEuDogRHGMm1Knvw8DIc084xHG2xdPxaIpLec2Kj1dg+UTCa33e+dRLpD+vyu+q8OZbt5Hp3BEMlzQ6lPgNKCjRQHIHqd8zAbYO8QMixoAbwg0rHjrLCWebZYMpm4Zo1Hp7P+9FJ8c2mijBULw/nIvL8w4IN4AY4eGKZfZlPROYylgWFsMGehQv7iEVH444Lr2vvKGrXMLr9kcuX6zXu+2j39kJ/ZSFNX/cwhbu4w4/CSeef6gSHWKUCJASDaxpDJVqdI9dnTssw9Q9lZqm9nwWMeho/JHh9Esj+s7ZrQ1D0ZN3WHvJLJ1kja3SIxGMgem1faQf4ZA52X5BuGQqcAgwd7szZ6O+tUqNxkOKR92bAEsc/EQb+xUgKY0NDRN8Wrj0mD1tsfns8zmXTVu8bJGCwAmyjkxjr4WUEQhmzjN8CgYRiwXqnhNe1mL68KUATCWibuTiKZvFOL7mQy+UlK6ZBNFR2IpM2vqTLARwvGFRP2LvbW9CaQ0F1lFdVlQ63zxwZhrXdpASL5xwxt16l25QqTSb2nkH2DBUGQLwYQzcz6dyhTAwI5tiBJ48uBJNcDKMeApNzGS6hZgHJT9nxUzQVenAAD+IWuD2vQMr+2IZG3w507CkZRX9BVH80nk8mPHSnVAwQIcBRhVs/LJzd0ZP5oIpEPGzt6p3opm0cmm+onD7a+AQIEOEph+Jg8F9YyemNnxnMUKI6zkInnW8gCBAjwMUWkvVdq7Mysj6S3OAeHdUDTpvqvze8ODbkZDTenpmJCfZ2b+DgDE7UNJ2i8uLI0gQn9Sal1KgazKD0TE/X5aIIKQ61LgGMApSCSGKEQEzXvxCXHcRwmak+UpIba0c4zPmpEUqjvAwQ4YgiIxIqASAIEKAIBkVgREEmAAEUgRySxBJ2PifoKJnQ7Tqo/v4HS/jiVUUrPwgn1fkzoPkzozhihP5tP6Wkcx3HRBMWYqLo5RZN0OsdxHCb0A+a3/ntlKKXHY6J+BxP1LUzUN6JEXTN78eL+K0kxSc3GhCazetFdmKj7Z1F6pkX3BI1jQv/AyHwLJynNfRdvbhmHifpGJJL1hYgTWhEjqoaJehAT+hImNGl2BsREbYslUs3RJF2OifoGJuoT0QR1venPaG8ekbjWl0hdj5N0Kyb0TUzUf8YIvZrjOC66ePEYTNQ2TOhrmNB/Y0Lzwg8W6nujLXp08eIxJv26cKIFYUJ/nW0b3RZNpqbEScsETOgfDB2eiiZaLIGgo8nUlZioT2Ci7sdEfSaaSA086E+AjxeyRKIejBF16axb6bnRxYvHGA/+CiPLMJxQ/xQl9J54Mz0/3kzPxwm6FifVn+ZkFDMjwYT+OEboptmEXoCTyXNiRP0eJupjuUGGSWp2jKhbcEJ9YO7ixefh22iekxy+jY7GhB7IkV68mV6KidodJfQvpnq+HiXqQxzHcYsWLToFE7otRug3cDJ5TjRJL8wODIpN+rZhovbFkqkvzkskRkYTtB4T+nYsmXI97coSiVt98WTy05jQfXOSqSvmJRIjY80tlXFCKziO43CSrowSes9sQs6eTcjZsQS1vSvIpe/ziCSaoC/MSdCr5iUSI2MJOjdL5PSReHPLuHmJxEicVJfhhPqn/jJZ4vk3JrQh/k36KZygn8dJ9XWcaEFu/RHgGAJuTk2NEfqk5bvb6GhM1INzFy8+L/u2Ul8xv0XjhFZgor7LGXEs/BJJnNIRmNB98WSyP8pXJBI5LkbUd/oHEknNxkR9I07piIL6J+nWaILWG59pNEEXRIn6cm72gpN0JSapKMdxXJSkvoqTdLW5fCyRugEn1X4zfJZIUpYwhTiRUjFRXS8yZ4nErT5825KxmNA97Ewrq7f6ME6mHK9Z6Jfnl0iStP/mO0rpcEzogViS9kcUiyVpNSZ0z2F91V/iRMpym0GUqHfGEvQHbroFOIbgtEeCCd0eS9BJmKSi7PQ5l2YTcjbH+SeS7MNqL7OfFLJLm4J3kGTrVpfiBL3DqOsxfNuSscYyrDESiRyHifrWnNvoKKNNP3Got//CK7s9EkzoZEyoa7Bjlki81Bcj6lJM6K4YUZfGCO2/Nzm2mH4WE7oTJ+jaWCI1zekslm8iYf4LTOhunKRVVnn0gEnGY7ZtSNKVbv0R4BhCASJ5LZpMTYklUwvdBrRvIskOkj1cgchcxozENWJ7luzUJ24i5JO5wR4lqRk4qS6LJ6mMifqMqU33YaL+sJA8OyKJJVLTMKE73XSxIRLX+jjOWOIkUi2Y0EyUpGb0fx+Pn2DU/QgmtJNSmhcJ/wgQyTM4SW90a0OAYxx2RDKnueUiTOiBWbfSc2Ok5XJM1Lfspt85+CWSeYnESEzUg4XW2V6JJELpiTGivhNN0ulRQu/hOI6bdSs9FxP12VgytTA3WzH0/AYm6l+5ggSWTyTRpHp3NEldLzNnicRLfWbEEqlwjKhb2O+NTeRX4800L5LZESCSB3FSXeZF/wDHMIzN1ndxInV9nNIRWRJRnzG9SYfhpPowJurGry5ZIlJKh+MlS8rN0/DZhJyNiarHEi21M2655VS8ZEl57rcYUVdFk+rdixYtOmU2oRf010vUH+IEfQ4vphdTSo/HyeQ5ZmuBVyIxZK3DRN0YS6TCh7+jT2OituNk6gu576KUnoUJ3YmT6k9xMnlOPB4/IZqkF866lZ5rktUWTap/jCbphYsWLTolRlIxTNS9ucFmLEGe5GyQt0fiUl+E0hPnJFNXzKL05FmUnomT6k9jCbqe4zhuDmmZiJPJcyilxxtWk/fMpOCl70tBJNFESw0mdE8smbo53tx8xixKT55DWiYuXLgwiFMT4DBwc2oqTqj3Rwm9J2v+o6/hJP2WeRodb24+w/h9m7FG7mU3JLNWF7oPE7oHE/U7ue/nkJaJOGtW/iBG1C05C0skEjkuSmgKJ+hzWTMxfRMT+qN+vXwRCf0aJurBKKVnHf5OvQsT+v6iRYssV1HElywBMaKuyppV1YOYqC/iBP28qVybYVZ+3DB3PhFtppflfo8m6RxM1PfsNoFtzb8F6pu9ePFnjHr2YqK+h4nalhv4OEHvMMyxhzBRn8eJlGNAIae+LwWRcBzHRZvpZZioPZjQ3UY9f5+boGVO+gQIEMAFc5YskbxsAgcIECCAIzChv/vV8SEAAAALSURBVAoOwh17+H9xfpRMakfx/AAAAABJRU5ErkJggg=='
            }
        }],
		footerContent: [
        {
            style: {
                backgroundColor: '#fafafa',
                color: '#000000',
                height: 20,
                mergeAcross: true,
                verticalAlign: 'middle',
                textAlign: 'center'
            },
            cells: {
                firstName: 'Generated by: jQWidgets'
            }
        },
        {
            style: {
                backgroundColor: '#fafafa',
                color: '#000000',
                height: 20,
                mergeAcross: true,
                verticalAlign: 'middle',
                textAlign: 'center'
            },
            cells: {
                firstName: 'Website: www.jqwidgets.com'
            }
        },
        {
            style: {
                backgroundColor: '#fafafa',
                color: '#000000',
                height: 20,
                mergeAcross: true,
                verticalAlign: 'middle',
                textAlign: 'center'
            },
            cells: {
                firstName: 'Date: ' + new Date().toString()
            }
        }
		],
		addImageToCell: (index: number, column: string, value: any) => {
			if ((value && typeof value === 'string' && value.indexOf('data:image') >= 0)) {
				return {
					image: {
						id: 'myImage' + index,
						base64: value,
						imageType: 'png',
						width: 200,
						height: 45,
						position: {
							offsetX: 10,
							offsetY: 5.5,
						},
					},
					value
				}
			}
			
			return null;
		}
	}
	
	selection = {
		enabled: true,
		checkBoxes: {
			enabled: true
		}
	}

    onRowInit = (index: number, row: any) => {
		if (index === 0 || index === 3 || index === 7 || index === 8 || index === 4) {
			row.selected = true;
		}
	}
			
	columns = [
		{ label: 'First Name', dataField: 'firstName', width: 300, showIcon: true, icon: 'firstName' },
		{ label: 'Last Name', dataField: 'lastName', width: 300, showIcon: true, icon: 'lastName' },
		{ label: 'Birthday', dataField: 'birthday', width: 300, showIcon: true, icon: 'birthday', formatSettings: { formatString: 'd' } },
		{ label: 'Pet Name', dataField: 'petName', width: 300, showIcon: true, icon: 'petName' },
		{ label: 'Attachments', dataField: 'attachments', width: 300, showIcon: true, editor: 'image', template: 'image', cardHeight: 6 },
		{ label: 'Country', dataField: 'country', width: 300, showIcon: true, icon: 'country' },
		{ label: 'Product Name', dataField: 'productName', width: 300, showIcon: true, icon: 'productName' },
		{ label: 'Price', dataField: 'price', width: 300, showIcon: true, icon: 'price', formatSettings: { formatString: 'c2' } },
		{
			label: 'Quantity', dataField: 'quantity', width: 300, showIcon: true, icon: 'quantity', formatFunction: function (settings: any) {
				const value = settings.value;
				let className;
				if (value < 20) {
					className = 'red';
				}
				else if (value < 35) {
					className = 'yellow';
				}
				else {
					className = 'green';
				}
				settings.template = `<div class="${className}">${value}</div>`;
			}
		},
		{ label: 'Time of Purchase', dataField: 'timeOfPurchase', width: 300, showIcon: true, icon: 'timeOfPurchase', formatSettings: { formatString: 'hh:mm tt' } },
		{
			label: 'Expired', dataField: 'expired', width: 300, showIcon: true, icon: 'expired', formatFunction: function (settings: any) {
				settings.template = settings.value ? '☑' : '☐';
			}
		}
	]
}