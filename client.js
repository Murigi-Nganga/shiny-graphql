// Example of a GraphQL query client-side implementation:

const graphQLContentElement = document.getElementById("graphql-content");

const url = "http://localhost:3002/api";
query = `query {
    books {
      name
      author {
        name
        }
      }
  }`;

fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    query: query,
  }),
})
  .then((res) => res.json())
  .then((data) => {
    var content = "";
    data.data.books.forEach((element, index) => {
      content += `
    <div id='book'>
      <h3>Book ${index + 1}</h3>
      <p>Name: ${element.name}</p>
      <p>Author: ${element.author.name}</p>
    </div>
  `;
    });
    graphQLContentElement.innerHTML = content;
  });
