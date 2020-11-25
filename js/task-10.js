import users from "./users.js"


// Задание 10
// Получить массив всех умений всех пользователей 
//(поле skills), при этом не должно быть повторяющихся 
//умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = users =>
{
    const newUsers = users.reduce((acc, user) => [...acc, ...user.skills], []).sort()
    .filter((skill, index, array) => {return skill !== array[index -1]})

          return newUsers 
}

console.log(getSortedUniqueSkills(users));
// // [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud',
