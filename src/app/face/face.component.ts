import { Component, HostListener, input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepperIntl } from '@angular/material/stepper';



@Component({
  selector: 'app-face',
  templateUrl: './face.component.html',
  styleUrls: ['./face.component.css'],
  
})
export class FaceComponent {
  inputText: string = ''; 
  qrCodeValue: string = ''; 
  inputSize: string = '';
  qrSize: string = '';
  inputSSID: string = '';
  inputPw: string = '';
  qrwlan: string = '';
  kind: string='';
  inputName: string='';
  inputTEL: string='';
  inputMail: string='';
  generated: boolean=false;
  footerImages:{ imagePath: string; caption: string; link: string ;text: string}[];
  


  constructor(){
    this.footerImages=[
      {imagePath:'../assets/CIIT_Logo.jpg' , caption:'provided by', link:'https://ciit-software.com/', text:'to our homepage<br>We develop custom software solutions perfectly tailored to your needs. From ideation and conceptualization to implementation, deployment, training, and support, we guide you through the entire process. Our projects are based on the agile software development method Scrum, which has proven to be the most effective approach.' },

      {imagePath:'../assets/SchulungsRaum.avif', caption:'our Courses', link:'https://ciit-training.com/en/schulungen/',text: 'to our Courses <br> <br>We offer versatile tech training: Remote, Classroom, or In-House. Tailored to you by experienced engineers.'},
      
      {imagePath:'../assets/CIIT-Sitzung-01.avif', caption:'Java 21 Basics', link:'https://ciit-training.com/en/java-21-grundlagen/',text: 'The Java SE 21 Basics Training introduces participants to object-oriented programming with Java, starting with practical exercises and advancing to more complex examples, ultimately preparing them for real-world application development.'},
      
      {imagePath:'../assets/programieren.png', caption:'Java 21 Advanced', link:'https://ciit-training.com/en/fortgeschrittene-programmierung-mit-java-21/',text: 'The Java Programming Advanced Topics course delves deep into programming, covering key APIs and libraries through extensive exercises. Topics include advanced Java concepts like multithreading, I/O, generics, lambda expressions, collections, networking, and more, with flexibility to tailor content to specific needs.'},
     
      {imagePath:'../assets/Angular.png', caption:'Angular', link:'https://ciit-training.com/angular/',text: 'Explore Angular, one of the most popular JavaScript frameworks for creating Single Page Applications. Our course provides a detailed introduction to Angular and TypeScript, including practical examples.'},
      
      {imagePath:'../assets/react-logo.jpg', caption:'React', link:'https://ciit-training.com/webentwicklung-mit-dem-react-framework/',text: 'The significance of JavaScript is steadily increasing, extending beyond browser dynamics to server-side applications. React, a JavaScript framework for UI development, originally created by Facebook, is now widely used across various platforms as an open-source project. Our experienced trainers will guide you through hands-on development of a sample application of your choice.'},
    ]
  }
  generateVCardQRCode() {
    const vCardString = `BEGIN:VCARD\nVERSION:3.0\nFN:${this.inputName}\nTEL:${this.inputTEL}\nEMAIL:${this.inputMail}\nEND:VCARD`;

    
    this.qrCodeValue = vCardString;
    this.generated=true;
    this.resizeInputFields();
  }

  resizeInputFields(){
    const inputConainers=document.querySelectorAll('.box>div');
    inputConainers.forEach(container=>{
      container.classList.add('large');
      console.log("hallo!")
    })
  }

  generateQRCode() {
    

    if (this.kind==='wlan') {
      this.qrwlan = 'WIFI:T:WPA2;S:' + this.inputSSID + ';P:' + this.inputPw + ';;';
      this.qrCodeValue = this.qrwlan; // Setzen des Wertes für den QR-Code
      this.qrSize = this.inputSize;
      console.log(this.qrCodeValue)
    } else if (this.kind==='url'){
      this.qrCodeValue = this.inputText;
      console.log(this.qrCodeValue)
    }
    this.generated=true;

  }

  handleEnterKey(event: Event): void {
    if (event instanceof KeyboardEvent) {

      event.preventDefault();
      // Sende die Nachricht
      this.generateQRCode();

    }
  }

}