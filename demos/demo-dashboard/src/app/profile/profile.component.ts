import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';

import { LocalizationService } from '../services/localization.service';

import { FormComponent, FormModule } from 'smart-webcomponents-angular/form'
import { FileUploadModule } from 'smart-webcomponents-angular/fileupload';
import { InputModule } from 'smart-webcomponents-angular/input';
import { MaskedTextBoxModule } from 'smart-webcomponents-angular/maskedtextbox';
import { ButtonModule } from 'smart-webcomponents-angular/button';
import { DropDownListModule } from 'smart-webcomponents-angular/dropdownlist';
import { EditorModule } from 'smart-webcomponents-angular/editor';
import { RadioButtonModule } from 'smart-webcomponents-angular/radiobutton';
import { ToastComponent, ToastModule } from 'smart-webcomponents-angular/toast';

@Component({
  selector: 'app-profile',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  imports: [FormModule, FileUploadModule, InputModule, ButtonModule, MaskedTextBoxModule, DropDownListModule, EditorModule, RadioButtonModule, ToastModule]
})
export class ProfileComponent implements AfterViewInit {
  @ViewChild('form', { read: FormComponent, static: false }) form!: FormComponent;
  @ViewChild('successToast', { read: ToastComponent, static: false }) successToast!: ToastComponent;

  toolbarItems: any = ['Bold', 'Italic', 'Underline', 'Alignment', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent'];

  formValue = {
    firstName: 'Alexander',
    lastName: 'Harris',
    email: 'alexharris@htmlelements.com',
    phoneNumber: '83219513931',
    country: 'Bulgaria',
    biography: '',
    team: 'fireTeam'
  }

  formValid = true;

  formLabels!: {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    country: string;
    biography: string;
    team: string;
    saveChanges: string;
    cancel: string;
  };

  constructor(private localizationService: LocalizationService) {
    this.applyLocalization()

    this.localizationService.localeEmitter.subscribe(locale => {
      this.applyLocalization()
    })
  }

  applyLocalization() {
    this.formLabels = this.localizationService.getProfileFormLabels();
  }

  submitForm(event: Event) {
    this.successToast.open()
    window.Smart.Render()
  }

  ngAfterViewInit(): void {
    const form = new window.Smart.Form('#member-form', {
      firstName: ['', {
        required: true,
        info: 'Enter First Name',
        validationRules: [{ type: 'required', message: 'First Name is required' }]
      }],
      lastName: ['', {
        required: true,
        info: 'Enter Last Name',
        validationRules: [{ type: 'required', message: 'Last Name is required' }]
      }],
      email: ['', {
        required: true,
        controlType: 'email',
        info: 'Enter Email Address',
        validationRules: [
          { type: 'required', message: 'Last Name is required' },
          { type: 'email', message: 'Enter vaild email address' },
        ]
      }],
      phoneNumber: ['', {
        required: true,
        info: 'Enter Phone Number',
        validationRules: [{ type: 'required', message: 'Phone Number is required' }]
      }],
      country: ['', {
        info: 'Select country'
      }],
      biography: ['', {}],
      team: ['', {}],
    });

    // set form's value.
    form.value = this.formValue;

    form.onValueChanges = (value: any) => {
      this.formValid = form.valid
    }

  }

  countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia (Czech Republic)',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini (fmr. Swaziland)',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Holy See',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (formerly Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Palestine State',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States of America',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ];
}
