function status(request, response) {
  response.status(200).json({ chave: "valor", id: "120303", nome: "André" });
}
export default status;
