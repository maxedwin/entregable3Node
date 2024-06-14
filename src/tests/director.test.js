const request = require("supertest");
const app = require("../app");

let id;

test('GET /directors debe traer todos los directores', async () => {
    const res = await request(app).get('/directors');
    expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);  
});

test('POST /directors debe crear un director', async ()=>{
    const directorBody = {
        firstName: "JUAN",
        lastName: "PEREZ",
        nationality: "juan@gmail.com",
        image: "http:/urlexample.jpg",
        birthday: "1990-01-30",
      
    }
    const res = await request(app)
    .post('/directors')
    .send(directorBody)
   

    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(directorBody.firstName);
    expect(res.body.id).toBeDefined();
});

test('PUT /directors/:id debe actualizar los datos del Director', async () => {
    const directorBody = {
        firstName: "JUAN JOSE",
        lastName: "PEREZ LUNA",
        nationality: "Juanito@gmail.com",
        image: "http:/urlexample_updated.jpg",
        birthday: "1991-02-28",
    };
    const res = await request(app)
        .put(`/directors/${id}`)
        .send(directorBody);

    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(directorBody.firstName);
    expect(res.body.lastName).toBe(directorBody.lastName);
    expect(res.body.nationality).toBe(directorBody.nationality);
    expect(res.body.image).toBe(directorBody.image);
    expect(res.body.id).toBe(id);
});

test('DELETE /directors/:id debe eliminar un director', async () =>{
    const res = await request(app)
    .delete('/directors/'+id)
    expect(res.status).toBe(204);
});