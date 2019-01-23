//определяет занятость
var age = 16;

if (age >= 1 && age <= 17) console.log("Учеба");
else if (age >= 18 && age <= 64) console.log("Работа");
else if (age >= 65 && age <= 100) console.log("Пенсия");
else console.log("Столько не живут");

//выводит количество разработчиков
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var developers;
for (var d in arr) {
  switch (arr[d]) {
    case 1:
      developers = "Разработчик";
      break;
    case 2:
    case 3:
    case 4:
      developers = "Разработчика";
      break;
defult
      developers = "Разработчиков";
  }
  console.log(arr[d] + " " + developers);
}
