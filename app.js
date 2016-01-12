// Home Page
var openFor = ['Pike Place Market', 'Capital Hill', 'Seattle Public Library', 'South Lake Union', 'Sea-Tac Airport', 'Website Sales'];

for (var p = 0; p < openFor.length; p++){
  var openForEl = document.createElement('h2');
  openForEl.textContent = openFor[p];
  document.body.appendChild(openForEl);
  var paraEl = document.createElement('p');
  paraEl.textContent = 'OPEN: 6:00am - 9:00pm, 7 Days A Week';
  document.body.appendChild(paraEl);
};


// <table>
//   <thead>
//     <tr>
//       <th></th>
//       <th></th>
//       <th></th>
//     </tr>
//   </thead>
//   <tbody>
//     <tr>
//       <td></td>
//       <td></td>
//       <td></td>
//     </tr>
//   </tbody>
// </table>
