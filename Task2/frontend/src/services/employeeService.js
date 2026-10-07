const API_URL = "http://localhost:5000/api/employees";

export const getEmployees = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Failed to fetch employees");
  }

  return response.json();
};

export const createEmployee = async (employee) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create employee");
  }

  return data;
};

export const updateEmployee = async (id, employee) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(employee)
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to update employee");
  }

  return data;
};

export const deleteEmployee = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to delete employee");
  }

  return data;
};