export const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3333/users");

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Erros ao pegar usuários", error);
  }
};

export const createUser = async (userData) => {
  console.log("userData:", userData);

  const formData = new FormData();

  formData.append("name", userData.name);
  formData.append("surname", userData.surname);
  formData.append("email", userData.email);

  if (userData.photo) {
    formData.append("photo", userData.photo);
  }

  try {
    const response = await fetch("http://localhost:3333/users", {
      method: "POST",
      body: formData,
    });

    const userCreated = await response.json();
    return userCreated;
  } catch (error) {
    console.error("Erro ao criar usuário", error);
  }
};
