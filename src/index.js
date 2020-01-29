import "./sass/style.scss";

("use strict");

const table = document.querySelector(".table-header");
console.log(table);

// helpers

const checkStatus = num => {
  if (num === 0) {
    return "Success";
  }
  return `<span class="span">${num} errors</span>`;
};

const markup = (path, submitted, check, stat, links) => {
  const checked = checkStatus(stat);
  return `
  <tr class="table-row">
 <td>   <input type="checkbox" name="" value="" /></td>
  <td><a
  href="#"
  target="_blank"
  class="table-link"
>${path}</td>
  <td>Sitemap index</td>
  <td>${submitted}</td>
  <td>${check}</td>
  <td class="table-status">${checked}</td>
  <td>${links}</td>
  <td><button type="button" class="recrawlBtn">Recrawl</button></td>
  <td><button type="button" class="deleteBtn"></button></td>
</tr>
  `;
};

// fetch request

fetch("https://semalt.tech/dev/api/v1/example/test/")
  .then(res => {
    if (res.ok) return res.json();
    throw new Error("Error while fetching " + response.statusText);
  })
  .then(data => {
    const date = data.result.sitemap[0].errors;
    console.log(date);

    const res = data.result.sitemap.reduce(
      (acc, arr) =>
        acc +
        markup(
          arr.path,
          arr.lastSubmitted,
          arr.lastCheck,
          arr.errors,
          arr.urls
        ),
      ""
    );

    table.insertAdjacentHTML("afterend", res);
  })

  .catch(error => {
    console.log(error);
  });

//
