export const headerScreen = (): HTMLElement => {
  const header = <HTMLElement>document.createElement('header')
  const divTabs = <HTMLDivElement>document.createElement('div');
  const divTabsMain = <HTMLDivElement>document.createElement('div');
  const xmlns = 'http://www.w3.org/2000/svg';
  const svg = <SVGElement>document.createElementNS(xmlns, 'svg');
  const path = <SVGElement>document.createElementNS(xmlns, 'path');
  const divTabsToy = <HTMLDivElement>document.createElement('div');
  const pToy = <HTMLParagraphElement>document.createElement('p');
  const divTabsTree = <HTMLDivElement>document.createElement('div');
  const pTree = <HTMLParagraphElement>document.createElement('p');

  header.className = 'flex header-toys';
  divTabs.className = 'tabs flex';
  divTabsMain.className = 'tabs-main button';
  svg.setAttributeNS(null, 'version', '1.1');
  svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns', 'http://www.w3.org/2000/svg');
  svg.setAttributeNS(null, 'width', '48');
  svg.setAttributeNS(null, 'height', '78');
  svg.setAttributeNS(null, 'viewBox', '0 0 98 128');
  path.setAttributeNS(null, 'fill', '#fff');
  path.setAttributeNS(null, 'd', 'M45.98 3.873c-0.649 0.673-5.252 6.277-10.228 12.453s-11.68 14.49-14.896 18.476c-3.216 3.986-5.848 7.42-5.848 7.63 0 0.212 14.772 0.382 33.151 0.382 30.079 0 33.126-0.065 32.882-0.7-0.148-0.385-3.139-4.208-6.648-8.496s-9.070-11.14-12.358-15.227l-5.978-7.43v5.529c0 5.43 0.276 6.654 2.045 9.053 0.066 0.090 1.058 0.339 2.204 0.553 3.969 0.742 4.637 2.432 2.079 5.264-1.563 1.73-2.118 4.316-1.234 5.747 1.091 1.766-2.030 3.34-4.375 2.205-2.196-1.063-3.177-1.115-4.692-0.249-3.155 1.804-5.112 0.489-4.685-3.147 0.286-2.43 0.261-2.503-1.485-4.397-2.508-2.721-2.067-4.651 1.193-5.228 2.918-0.517 3.208-0.713 4.323-2.915 1.032-2.038 1.095-2.568 1.095-9.396v-7.237l-1.361-1.713c-2.255-2.837-3.333-3.077-5.183-1.156zM53.277 27.177c-0.436 0.588-1.429 1.393-2.207 1.789-1.903 0.967-1.882 0.927-1.007 1.894 0.424 0.468 0.872 1.611 0.997 2.541l0.227 1.689h5.872l0.084-1.511c0.046-0.831 0.489-2.059 0.983-2.728l0.899-1.216-1.528-0.504c-0.84-0.277-1.978-1.071-2.528-1.764l-1-1.259-0.792 1.070zM20.916 55.005c-3.857 4.763-8.154 10.044-9.55 11.737-3.369 4.084-3.653 3.879 5.381 3.879h7.919l-0.587-1.132c-1.241-2.391 0.142-3.923 4.119-4.564 2.754-0.444 4.907-1.426 4.907-2.24 0-0.226 0.596-1.422 1.324-2.657 1.288-2.184 1.324-2.404 1.324-7.964v-5.719h-7.824l-7.012 8.66zM39.283 51.788v5.444l1.832 3.372c1.978 3.64 2.382 3.912 6.673 4.492 3.291 0.445 4.349 2.018 3.2 4.752-0.306 0.729 0.722 0.772 18.076 0.772 13.193 0 18.356-0.138 18.239-0.486-0.089-0.267-4.409-5.729-9.6-12.138l-9.438-11.652h-28.984v5.444zM36.706 63.308c-0.961 2.657-4.631 5.094-7.685 5.103-1.14 0.004-0.953 0.537 0.781 2.218 1.871 1.813 2.553 4.063 2.152 7.090l-0.299 2.252 1.938-0.997c2.584-1.33 5.378-1.35 7.839-0.057 2.312 1.215 2.276 1.237 1.838-1.155-0.583-3.179 0.013-4.882 2.748-7.853l1.265-1.374-2.179-0.289c-2.791-0.37-5.369-2.216-6.453-4.619-1.004-2.226-1.242-2.265-1.946-0.319zM15.669 79.737c-2.427 3.043-6.35 7.945-8.717 10.892s-4.303 5.511-4.303 5.696c0 0.185 20.458 0.337 45.462 0.337s45.462-0.161 45.462-0.359c0-0.197-3.982-5.262-8.849-11.255l-8.849-10.897h-14.492c-16.645 0-15.169-0.484-14.44 4.732 0.72 5.153-1.238 6.271-6.335 3.618-2.849-1.483-3.172-1.468-6.716 0.313-4.617 2.32-6.551 0.885-5.705-4.234 0.729-4.413 0.709-4.434-4.067-4.403l-4.035 0.026-4.414 5.533zM43.697 111.711c0 14.076 0.139 14.498 4.779 14.517 1.040 0.004 1.845-0.371 2.759-1.284l1.29-1.29v-23.461h-8.828v11.518z');
  divTabsToy.className = 'tabs-toy button';
  pToy.innerText = 'игрушки';
  divTabsTree.className = 'tabs-tree button';
  pTree.innerText = 'елка'


  svg.append(path);
  divTabsMain.append(svg);
  divTabsToy.append(pToy);
  divTabsTree.append(pTree);
  divTabs.append(divTabsMain);
  divTabs.append(divTabsToy);
  divTabs.append(divTabsTree);
  header.append(divTabs);

  return header;
}
