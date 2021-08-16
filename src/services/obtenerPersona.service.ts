import http from "../http-client";

interface IPersona {
    tipo: string;
    mensaje: string;
    titulo: string;
    data: any // Dependera de como sea el servicio
}

class PersonaService {
    getPersona() {
        return http.get("/obtenerdatospersona");
    }

    // Muestra de como serían los otros tipos de endpoints
    getAll() {
        return http.get("/personas");
    }

    get(id: string) {
        return http.get(`/personas/${id}`);
    }

    create(data: IPersona) {
        return http.post("/personas", data);
    }

    update(data: IPersona, id: any) {
        return http.put(`/personas/${id}`, data);
    }

    delete(id: any) {
        return http.delete(`/personas/${id}`);
    }

    deleteAll() {
        return http.delete(`/personas`);
    }

    findByTitle(title: string) {
        return http.get(`/personas?title=${title}`);
    }
}

export default new PersonaService();