export function tablazatOsszeallit(MACSEKOK) {
  let txt = `<table class = "table">
            <tr>
              <th>Név</th>
              <th>Fajta</th>
              <th>Kor</th>
            </tr>`;
  for (let index = 0; index < MACSEKOK.length; index++) {
    txt += `
        <tr class = "sorELEM">
            <td>${MACSEKOK[index].nev}</td>
            <td>${MACSEKOK[index].fajta}</td>
            <td>${MACSEKOK[index].kor}</td>
        </tr>
        `;
  }
  txt += `</table>`;
  return txt;
}

