const request = require("supertest");
const app = require("../app");

let id;

test('GET /genres debe traer todos los generos', async () => {
    const res = await request(app).get('/genres');
    expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);  
});

test('POST /genres debe crear un genero', async ()=>{
    const genreBody = {
        name: "male",
        
      
    }
    const res = await request(app)
    .post('/genres')
    .send(genreBody)
   

    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.name).toBe(genreBody.name);
    expect(res.body.id).toBeDefined();
});

test('PUT /GENRES/:id debe actualizar los datos del genero', async () => {
    const genreBody = {
        name: "female",

    };
    const res = await request(app)
        .put(`/genres/${id}`)
        .send(genreBody);

    expect(res.status).toBe(200);
    expect(res.body.name).toBe(genreBody.name);
 
    expect(res.body.id).toBe(id);
});

test('DELETE /genres/:id debe eliminar un genero', async () =>{
    const res = await request(app)
    .delete('/genres/'+id)
    expect(res.status).toBe(204);
});