import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import grapesjs from 'grapesjs';
// @ts-ignore
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-web-builder',
  templateUrl: './web-builder.component.html',
  styleUrls: ['./web-builder.component.scss']
})
export class WebBuilderComponent implements OnInit {
  public editor:any = null;

  constructor(private http: HttpClient, private sanitizer: DomSanitizer) {}


  ngOnInit(): void {
    this.editor = grapesjs.init({
      container: '#gjs',
      // Get the content for the canvas directly from the element
      // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
      fromElement: true,
      // Size of the editor
      height: '700px',
      width: 'auto',
      // Disable the storage manager for the moment
      storageManager: false,
      showDevices: false, // Oculta el botón de previsualización
      avoidInlineStyle: true, // Esta opción evita que se generen automáticamente los atributos "id"
      //showCodeView: true, // Oculta el botón de código fuente

      // Avoid any default panel
      // Inicializa los paneles vacíos para agregarlos manualmente
      //panels: {defaults: []},
      //plugins: ['bootstrap'],
      pluginsOpts: {
          'bootstrap': {
              blocks: {},
              blockCategories: {},
              labels: {},
              gridDevicesPanel: true,
              formPredefinedActions: [
                  {name: 'Contact', value: '/contact'},
                  {name: 'landing', value: '/landing'},
              ]
          }
      },
      canvas: {
          styles: [
              '../../assets/css/bootstrap5-grapesjs/cdn.jsdelivr.net_npm_bootstrap@5.3.1_dist_css_bootstrap.min.css'
          ],
          scripts: [
              //x'https://code.jquery.com/jquery-3.5.1.slim.min.js',
              //'https://unpkg.com/@popperjs/core@2',
              //'https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js'
          ],
      },

      blockManager: {
      //appendTo: '#blocks',
      blocks: [
        {
          //id: 'table_2',
          label: 'H1, H2, H3',
          category: 'Labels h1,h2,h3',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content:`
            <h1 class="text-center text-dark">titulo h1</h1>
            <h2 class="text-center text-dark">titulo h2</h2>
            <h3 class="text-center text-dark">titulo h3</h3>
          `
        }, {
          //id: 'table_2',
          label: 'H1, H2, H3',
          category: 'Labels h1,h2,h3',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content:`
            <h1 class="text-center text-dark">titulo h1</h1>
            <h2 class="text-center text-dark">titulo h2</h2>
            <h3 class="text-center text-dark">titulo h3</h3>
          `
        },
        {
          //id: 'table_2',
          label: 'Demo 1',
          category: 'Plantillas',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content: this.plantilla1
        }, { //id: 'table_1',
          label: 'Tabla Sin Borde',
          category: 'Tablas',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content:`
            <table class="table table-borderless">
              <thead>
                <tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr>
              </thead>
              <tbody>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          `
        }, { //id: 'table_2',
          label: 'Tabla Con Borde Negro y Lineas',
          category: 'Tablas',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content:`
          <table class='table borderless'>
              <thead class="table-dark">
                <tr><th></th><th></th><th></th><th></th><th></th></tr>
              </thead>
              <tbody>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
                <tr><td></td><td></td><td></td><td></td><td></td></tr>
              </tbody>
            </table>
          `
        }, { //id: 'table_3',
          label: 'Tabla Con Borde Gris y Lineas',
          category: 'Tablas',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true,
          // style: { background: 'red'},
          // attributes: { title: 'here' },
          content:`
          <table class='table table-bordered'>
              <thead class="table-primary">
                <tr><th>.</th><th>.</th><th>.</th><th>.</th><th>.</th></tr>
              </thead>
              <tbody>
                <tr><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></tr>
                <tr><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></tr>
                <tr><td>.</td><td>.</td><td>.</td><td>.</td><td>.</td></tr>
              </tbody>
            </table>
          `
        }, {
          //id: 'table_2',
          label: 'Tabla II',
          category: 'Tablas',
          attributes: { class: 'fa fa-table' },
          type: 'cell',
          tagName: 'td',
          removable: true, // Can't remove it
          draggable: ['tr'], // Can't move it
          copyable: true, // Disable copy/past
          dropable: true, // style: { background: 'red'}, // attributes: { title: 'here' },
          content:`
            <div class="row">
              <div class="col-xs-6 col-sm-6"><p>col-sm-6</p></div>
              <div class="col-xs-6 col-sm-6"><p>col-sm-6</p></div>
            </div>`
        }, {
          id: 'image',
          label: 'Image',
          category: 'imagenes',
          select: false,
          content: { type: 'image' },
          // This triggers `active` event on dropped components and the `image`
          // reacts by opening the AssetManager
          activate: true,
        }
      ]}
    });
    const panelManager = this.editor.Panels;
    const newPanel = panelManager.addPanel({
      id: 'myNewPanel',
      visible: true,
      buttons: [
        {
          id: 'my-button-1',
          className: 'my-button-class',
          label: '<i class="fas fa-star"></i> Botón 1', // Icono de estrella de Font Awesome
          command: 'my-command-1'
        }, {
          id: 'my-input-1',
          className: 'my-input-class',
          label: '<i class="fas fa-star"></i> Botón 1', // Icono de estrella de Font Awesome
          command: 'my-commandinput-1'
        },
        // Agregar más botones personalizados aquí
      ],
    });

    this.editor.Commands.add('my-command-1', {
      run: (editor: any, sender: any, data: any) => {
        // Acción del botón 1
        // ...
        // Después de obtener el contenido generado por GrapesJS
        const generatedHtml = editor.getHtml();
        const generatedCss = editor.getCss();
        console.log(generatedHtml)
        this.generatePdf("<style>"+generatedCss+"</style>"+generatedHtml);
        console.log('my-command-1');

      },
    });

    // Ocultar el botón de previsualización
    this.editor.Panels.removeButton('options', 'preview');
    this.editor.Panels.removeButton('options', 'fullscreen');

    // Ocultar el botón de código fuente
    this.editor.Panels.removeButton('options', 'gjs-open-code');






    const customPanel = {
      id: 'custom-panel',
      buttons: [
        {
          id: 'button1',
          label: 'Botón 1',
          command: () => {
            // Lógica que se ejecuta cuando se hace clic en el botón 1
            console.log('¡Botón 1 fue presionado!');
          },
        },
        {
          id: 'button2',
          label: 'Botón 2',
          command: () => {
            // Lógica que se ejecuta cuando se hace clic en el botón 2
            console.log('¡Botón 2 fue presionado!');
          },
        },
        // Agrega más botones personalizados según tus necesidades
      ],
    };

  }
  generatePdf(codeHtml: string) {
    const opt = {
      margin: [10, 10, 10, 10],
      filename: 'generated.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    const element = document.createElement('div');
    element.innerHTML = `${codeHtml}`;
    const  pdf = html2pdf().from(element).set(opt).save(); // Generar el PDF


    const previewIframe = document.getElementById('preview-iframe');
    const pdfUrl = URL.createObjectURL(new Blob([codeHtml], { type: 'application/pdf' }));
    previewIframe?.setAttribute('src', pdf);

  }
  generateHTML(codeHtml: string) {
    const blob = new Blob([codeHtml], { type: 'text/html' });
    const downloadLink = document.createElement('a');
    downloadLink.href = URL.createObjectURL(blob);
    downloadLink.download = 'generated.html';
    downloadLink.click();
  }



  plantilla1: string = `<style>
  html {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 14px;
      color: black;
      word-break: break-all;
  }
  table {
      border-collapse: collapse;
      border: 1px solid #C5C5C5;
  }
  td {
      border: 1px solid #C5C5C5;
      word-break: break-all;
      text-align: left;
      padding: 10px;
  }
  th {
      background-color: #3B3B3B;
      color: white;
      text-align: left;
      padding: 10px;
  }
  tr:nth-child(even) {
      background-color: #C5C5C5;
  }
  .header-box {
      padding: 10px;;
      background: #3B3B3B;
      color: white;
  }
</style>
  <h1 class="header-box">Transfer Summary</h1>
  <h3>ID Transfer: 2245</h3>
  <p>
      <b>Creation Date: </b> 18.05.2023 <br>
      <b>Created by: </b> User 5656 <br>
      <b>Initial Comments: </b>
  </p>
  <hr>
  <p>
      <b>Transfer Date: </b> 20.05.2023 <br>
      <b>Transferd by: </b> User 5656 <br>
      <b>Final Comments: </b>
  </p>

  <table style="width:100%">
  <tr>
      <th>Sku</th>
      <th>Name</th>
      <th>Location</th>
      <th>Required</th>
      <th>Put Away</th>
      <th>Bintag</th>
  </tr>
  <tr>
      <td>A00001</td>
      <td>CEREAL KELLOGS CORN FLAKES 500GR</td>
      <td>03:AP-01-A</td>
      <td>1005</td>
      <td>0</td>
      <td>100004954</td>
  </tr>
  <tr>
      <td>A00002</td>
      <td>TOALLA HUM HUGGIES AS DOYP VERDE 48 UN</td>
      <td>03:AP-01-B</td>
      <td>350</td>
      <td>300</td>
      <td>100004955</td>
  </tr>
  <tr>
      <td>B00001</td>
      <td>CARBON ECOLOGICO 3KG</td>
      <td>03:AP-01-C</td>
      <td>200</td>
      <td>75</td>
      <td>100004957</td>
  </tr>
  </table>

  <p>Report generated: 06.06.2023</p>
  `;
}
