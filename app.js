const usersEl = document.getElementById("users");
const statusEl = document.getElementById("status");
const reloadBtn = document.getElementById("reloadBtn");

// Local Indian names dataset
const indianUsers = [
  {
    name: "Aarav Sharma",
    username: "aarav_sharma",
    email: "aarav.sharma@example.com",
    phone: "+91-9876543210",
    address: {
      street: "MG Road",
      suite: "Apt. 12B",
      city: "Mumbai",
      zipcode: "400001"
    },
    company: { name: "Infosys Ltd" }
  },
  {
    name: "Isha Patel",
    username: "isha_patel",
    email: "isha.patel@example.com",
    phone: "+91-9123456780",
    address: {
      street: "C.G. Road",
      suite: "Flat 5A",
      city: "Ahmedabad",
      zipcode: "380009"
    },
    company: { name: "Tata Consultancy Services" }
  },
  {
    name: "Rohan Mehta",
    username: "rohan_mehta",
    email: "rohan.mehta@example.com",
    phone: "+91-9988776655",
    address: {
      street: "Park Street",
      suite: "Suite 301",
      city: "Kolkata",
      zipcode: "700016"
    },
    company: { name: "Wipro Ltd" }
  },
  {
    name: "Priya Nair",
    username: "priya_nair",
    email: "priya.nair@example.com",
    phone: "+91-9001122334",
    address: {
      street: "Marine Drive",
      suite: "Bungalow 4",
      city: "Kochi",
      zipcode: "682001"
    },
    company: { name: "HCL Technologies" }
  }
];

function setStatus(text, type = "") {
  statusEl.className = type; // "", "ok", "err"
  statusEl.textContent = text;
}

function renderUsers(users) {
  usersEl.innerHTML = ""; // clear
  users.forEach(u => {
    const card = document.createElement("article");
    card.className = "user-card";
    const address = `${u.address.street}, ${u.address.suite}, ${u.address.city} ${u.address.zipcode}`;
    card.innerHTML = `
      <h3 class="user-name">${u.name}</h3>
      <p class="user-email">${u.email}</p>
      <p class="user-meta">
        <strong>Username:</strong> ${u.username}<br>
        <strong>Phone:</strong> ${u.phone}<br>
        <strong>Address:</strong> ${address}<br>
        <strong>Company:</strong> ${u.company?.name || "-"}
      </p>
    `;
    usersEl.appendChild(card);
  });
}

async function loadUsers() {
  setStatus("Loading users…");
  usersEl.innerHTML = ""; // clear old cards

  try {
    // Simulate API delay
    await new Promise(res => setTimeout(res, 800));
    renderUsers(indianUsers);
    setStatus(`Loaded ${indianUsers.length} users ✔`, "ok");
  } catch (err) {
    setStatus(`Failed to load users: ${err.message}`, "err");
  }
}

reloadBtn.addEventListener("click", loadUsers);
document.addEventListener("DOMContentLoaded", loadUsers);
