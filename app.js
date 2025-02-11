const url = 'https://purpleschool.ru/course/javascript';


function getLink(link) {
  const protoсol = link.split('://')[0];
  const linkBody = link.split('://')[1];
  const [domen, ...others] = linkBody.split('/');
  const path = others.join('/');

  if (protoсol === 'https' || protoсol === 'https') {
    if (domen.includes('.')) {
      return;
    }
    console.log(`Протокол: ${protoсol}`);
    console.log(`Домменное имя: ${domen}`);
    console.log(`Путь внутри сайта: /${path}`);
  }
}

getLink(url);

const name = 'Misha';
console.log(name.includes('j'));