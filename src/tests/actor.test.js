const request = require("supertest");
const app = require("../app");

let id;

test('GET /actors debe traer todas los actores', async () => {
    const res = await request(app).get('/actors');
    expect(res.status).toBe(200);
  expect(res.body).toBeInstanceOf(Array);  
});

test('POST /actors debe crear un actor', async ()=>{
    const actorBody = {
        firstName: "JUAN",
        lastName: "PEREZ",
        nationality: "juan@gmail.com",
        image: "http:/urlexample.jpg",
        birthday: "1990-01-30",
      
    }
    const res = await request(app)
    .post('/actors')
    .send(actorBody)
   

    id = res.body.id;
    expect(res.status).toBe(201);
    expect(res.body.firstName).toBe(actorBody.firstName);
    expect(res.body.id).toBeDefined();
});

test('PUT /actors/:id debe actualizar un actor', async () => {
    const actorBody = {
        firstName: "JUAN JOSE",
        lastName: "PEREZ LUNA",
        nationality: "Juanito@gmail.com",
        image: "http:/urlexample_updated.jpg",
        birthday: "1991-02-28",
    };
    const res = await request(app)
        .put(`/actors/${id}`)
        .send(actorBody);

    expect(res.status).toBe(200);
    expect(res.body.firstName).toBe(actorBody.firstName);
    expect(res.body.lastName).toBe(actorBody.lastName);
    expect(res.body.nationality).toBe(actorBody.nationality);
    expect(res.body.image).toBe(actorBody.image);
    expect(res.body.id).toBe(id);
});

test('DELETE /actors/:id debe eliminar un actor', async () =>{
    const res = await request(app)
    .delete('/actors/'+id)
    expect(res.status).toBe(204);
});