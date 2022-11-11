var JSONObj = { "nombrelibro":"El hacedor", "precio":500 };
console.log(JSONObj);
fetch("users.json").then((response) => response.json()).then((data) => console.log(data));