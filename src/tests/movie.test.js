const request = require("supertest");
const app = require("../app");

let id;

test('GET /movies debe traer todos las peliculas', async () => {
    const res = await request(app).get('/movies');
    expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);  
});

test('POST /movies debe crear una pelicula', async ()=>{
    const movieBody = {
        name: "TROYA",
        image: "http://urlejemplo.jpg",
        synopsis: "es una pelicula basada en las novelas de Homero",
        releaseYear: 1998,
    
    }
    const res = await request(app)
    .post('/movies')
    .send(movieBody)
   
    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(movieBody.name);
    expect(res.body.id).toBeDefined();
});

test('PUT /movies/:id debe actualizar los datos de la pelicula', async () => {
    const movieBody = {
        name: "LA ODISEA",
        image: "http://urlejemplo.jpg",
        synopsis: "es una pelicula basada en las novelas de Homero",
        releaseYear: 1998,
    };
    const res = await request(app)
        .put(`/movies/${id}`)
        .send(movieBody);

    expect(res.status).toBe(200);
    expect(res.body.name).toBe(movieBody.name);
    expect(res.body.image).toBe(movieBody.image);
    expect(res.body.synopsis).toBe(movieBody.synopsis);
    expect(res.body.releaseYear).toBe(movieBody.releaseYear);
    expect(res.body.id).toBe(id);
});

test('DELETE /movies/:id debe eliminar una pelicula', async () =>{
    const res = await request(app)
    .delete('/movies/'+id)
    expect(res.status).toBe(204);
});