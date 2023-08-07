// panel-config.ts
export const PANEL_CONFIG = {
    defaults: [
      {
        id: 'custom-panel',
        el: '.panel__right',
        buttons: [
          {
            id: 'save-button',
            className: 'custom-save-button',
            label: 'Guardar',
            command: 'custom-save-command',
            // Aquí puedes agregar más propiedades personalizadas según tus necesidades
          },
          // Puedes agregar más botones aquí
        ],
      },
    ],
  };
