export const footerScreen = ():HTMLElement => {
  const footer = <HTMLElement>document.createElement('footer');
  const divRss = <HTMLDivElement>document.createElement('div');
  const aRss = <HTMLAnchorElement>document.createElement('a');
  const img = <HTMLImageElement>document.createElement('img');
  const divGithub = <HTMLDivElement>document.createElement('div');
  const aGithub = <HTMLAnchorElement>document.createElement('a');
  const divYear = <HTMLDivElement>document.createElement('div');

  footer.className = 'flex footer-main-screen';
  divRss.className = 'rss';
  aRss.href = 'https://rs.school/';
  img.src = '../assets/svg/rss.svg';
  img.alt = 'RS School';
  divGithub.className = 'github';
  aGithub.href = 'https://github.com/lost-fox';
  aGithub.innerText = 'LostFox';
  divYear.className = 'year';
  divYear.innerText = '2021';

  aRss.append(img);
  divRss.append(aRss);
  divGithub.append(aGithub);
  footer.append(divRss);
  footer.append(divGithub);
  footer.append(divYear);

  return footer;
}
