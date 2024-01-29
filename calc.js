// Отримуємо посилання на елемент з числом
const pagesNumberElement = document.querySelector('.pages-number');

// Глобальна змінна для зберігання останнього числа
let lastNumber;

// Функція для оновлення глобальної змінної та виклику додаткових дій
function updateNumber() {
    // Отримуємо нове значення числа з елемента
    const newNumber = parseInt(pagesNumberElement.textContent);

    // Перевіряємо, чи число змінилося
    if (newNumber !== lastNumber) {
        // Оновлюємо глобальну змінну
        lastNumber = newNumber;

        // Викликаємо додаткові дії при зміні числа
        console.log('Змінено число на:', lastNumber);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

// Створюємо спостереження за змінами у вмісті елемента
const observer = new MutationObserver(updateNumber);

// Встановлюємо параметри спостереження
observer.observe(pagesNumberElement, { characterData: true, subtree: true });

// Викликаємо функцію оновлення для початкового значення
updateNumber();

// Отримуємо посилання на елемент вибору
const zvanieVal = document.getElementById('Your-rank');
const strVal = document.getElementById('Your-structure');
const pensiaVal = document.getElementById('The-size-of-the-pension');
const civilyearsVal = document.getElementById('civilyears');
const waryearsVal = document.getElementById('waryears');
const dovidkaVal = document.getElementById('field-25');
const pensTypeVal = document.getElementById('typeofpension');


// Глобальна змінна для зберігання останнього вибраного значення
let zvanieValue;
let strValue;
let pensTypeValue;
let pensiaValue;
let civilyearsValue
let waryearsValue;
let loan;
let dovidkaValue;
let calculatePension;
// Функція для оновлення глобальної змінної та виклику додаткових дій
const updateLoan = (strValue, zvanieValue) => {
    console.log(strValue, zvanieValue);
      const loanMappings = {
      'Збройні сили України': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 13500,
        'Прапорщик': 13658,
        'Старший прапорщик': 14600,
        'Капітан': 15800,
        'Майор': 17983,
        'Підполковник': 19750,
        'Полковник': 20233,
        'Бригадний генерал': 25000,
        'Генерал-майор': 30000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Державна служба надзвичайних ситуацій (МНС)': {
        'Солдат': 9370,
        'Старший солдат': 9500,
        'Молодший сержант': 10500,
        'Сержант': 11500,
        'Старший сержант': 13168,
        'Молодший лейтенант': 12900,
        'Лейтенант': 12950,
        'Старший лейтенант': 13500,
        'Прапорщик': 14000,
        'Старший прапорщик': 15370,
        'Капітан': 16605,
        'Майор': 18150,
        'Підполковник': 19752,
        'Полковник': 20136,
        'Бригадний генерал': 25000,
        'Генерал-майор': 30000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Державна прикордонна служба': {
        'Солдат': 10370,
        'Старший солдат': 10500,
        'Молодший сержант': 11500,
        'Сержант': 12500,
        'Старший сержант': 14168,
        'Молодший лейтенант': 13900,
        'Лейтенант': 13950,
        'Старший лейтенант': 14500,
        'Прапорщик': 15000,
        'Старший прапорщик': 16370,
        'Капітан': 17605,
        'Майор': 19150,
        'Підполковник': 25080,
        'Полковник': 35930,
        'Бригадний генерал': 40000,
        'Генерал-майор': 43000,
        'Генерал-лейтенант': 45000,
        'Генерал-полковник': 50000,
        'Генерал армії': 55000,
      },
      'Міліція (МВС)': {
        'Солдат': 9500,
        'Старший солдат': 9700,
        'Молодший сержант': 10200,
        'Сержант': 10600,
        'Старший сержант': 11000,
        'Молодший лейтенант': 12300,
        'Лейтенант': 13000,
        'Старший лейтенант': 13300,
        'Прапорщик': 13075,
        'Старший прапорщик': 13800,
        'Капітан': 14360,
        'Майор': 17643,
        'Підполковник': 17733,
        'Полковник': 27951,
        'Бригадний генерал': 30000,
        'Генерал-майор': 33000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Державна пенітенціарна служба України': {
        'Солдат': 5000,
        'Старший солдат': 5300,
        'Молодший сержант': 5800,
        'Сержант': 6000,
        'Старший сержант': 6200,
        'Молодший лейтенант': 6300,
        'Лейтенант': 7000,
        'Старший лейтенант': 7500,
        'Прапорщик': 8280,
        'Старший прапорщик': 8900,
        'Капітан': 11000,
        'Майор': 12562,
        'Підполковник': 15470,
        'Полковник': 20000,
        'Бригадний генерал': 25000,
        'Генерал-майор': 30000,
        'Генерал-лейтенант': 35000,
        'Генерал-полковник': 40000,
        'Генерал армії': 45000,
      },
      'Служба безпеки України': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 14000,
        'Прапорщик': 14570,
        'Старший прапорщик': 15230,
        'Капітан': 16000,
        'Майор': 16780,
        'Підполковник': 24560,
        'Полковник': 35430,
        'Бригадний генерал': 40000,
        'Генерал-майор': 43000,
        'Генерал-лейтенант': 45000,
        'Генерал-полковник': 50000,
        'Генерал армії': 55000,
      },
      'Національна поліція': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 14000,
        'Прапорщик': 14500,
        'Старший прапорщик': 15870,
        'Капітан': 17105,
        'Майор': 18650,
        'Підполковник': 24580,
        'Полковник': 35430,
        'Бригадний генерал': 40000,
        'Генерал-майор': 43000,
        'Генерал-лейтенант': 45000,
        'Генерал-полковник': 50000,
        'Генерал армії': 55000,
      },
      'Національна гвардія': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 13500,
        'Прапорщик': 13580,
        'Старший прапорщик': 14000,
        'Капітан': 14360,
        'Майор': 17643,
        'Підполковник': 17733,
        'Полковник': 27951,
        'Бригадний генерал': 30000,
        'Генерал-майор': 33000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Державна фіскальна служба': {
        'Солдат': 4000,
        'Старший солдат': 4300,
        'Молодший сержант': 4800,
        'Сержант': 5000,
        'Старший сержант': 5200,
        'Молодший лейтенант': 5300,
        'Лейтенант': 6000,
        'Старший лейтенант': 6500,
        'Прапорщик': 7280,
        'Старший прапорщик': 7900,
        'Капітан': 10000,
        'Майор': 11562,
        'Підполковник': 14470,
        'Полковник': 19000,
        'Бригадний генерал': 24000,
        'Генерал-майор': 29000,
        'Генерал-лейтенант': 34000,
        'Генерал-полковник': 39000,
        'Генерал армії': 44000,
      },
      'Державна спеціальна служба транспорту': {
        'Солдат': 9500,
        'Старший солдат': 9700,
        'Молодший сержант': 10200,
        'Сержант': 10600,
        'Старший сержант': 11000,
        'Молодший лейтенант': 12300,
        'Лейтенант': 13000,
        'Старший лейтенант': 13300,
        'Прапорщик': 13336,
        'Старший прапорщик': 14600,
        'Капітан': 15800,
        'Майор': 17983,
        'Підполковник': 18573,
        'Полковник': 28831,
        'Бригадний генерал': 30000,
        'Генерал-майор': 33000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Служба зовнішньої розвідки України': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 13500,
        'Прапорщик': 13658,
        'Старший прапорщик': 15800,
        'Капітан': 17983,
        'Майор': 19801,
        'Підполковник': 22028,
        'Полковник': 22940,
        'Бригадний генерал': 25000,
        'Генерал-майор': 30000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Космічне агентство': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 13500,
        'Прапорщик': 13658,
        'Старший прапорщик': 14600,
        'Капітан': 15800,
        'Майор': 17983,
        'Підполковник': 19750,
        'Полковник': 20233,
        'Бригадний генерал': 25000,
        'Генерал-майор': 30000,
        'Генерал-лейтенант': 35220,
        'Генерал-полковник': 43300,
        'Генерал армії': 50000,
      },
      'Державна служба охорони': {
        'Солдат': 9870,
        'Старший солдат': 10000,
        'Молодший сержант': 11000,
        'Сержант': 12000,
        'Старший сержант': 13668,
        'Молодший лейтенант': 13400,
        'Лейтенант': 13450,
        'Старший лейтенант': 14000,
        'Прапорщик': 14500,
        'Старший прапорщик': 15870,
        'Капітан': 17105,
        'Майор': 18650,
        'Підполковник': 24580,
        'Полковник': 35430,
        'Бригадний генерал': 40000,
        'Генерал-майор': 43000,
        'Генерал-лейтенант': 45000,
        'Генерал-полковник': 50000,
        'Генерал армії': 55000,
      }
    };
    if (loanMappings.hasOwnProperty(strValue) && loanMappings[strValue].hasOwnProperty(zvanieValue)) {
      loan = loanMappings[strValue][zvanieValue];
      console.log(loan)
    } else {
      loan = 0;
    }
    console.log('loan :', loan);
    return loan;
  };

// Функція для оновлення глобальної змінної та виклику додаткових дій
function zvanieUpdate() {
    // Отримуємо нове значення вибору
    const newSelectedValue = zvanieVal.value;

    // Перевіряємо, чи значення вибору змінилося
    if (newSelectedValue !== zvanieValue) {
        // Оновлюємо глобальну змінну
        zvanieValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', zvanieValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function strUpdate() {
    // Отримуємо нове значення вибору
    const newSelectedValue = strVal.value;

    // Перевіряємо, чи значення вибору змінилося
    if (newSelectedValue !== strValue) {
        // Оновлюємо глобальну змінну
        strValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', strValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function pensTypeUpdate() {
    // Отримуємо нове значення вибору
    const newSelectedValue = pensTypeVal.value;

    // Перевіряємо, чи значення вибору змінилося
    if (newSelectedValue !== pensTypeValue) {
        // Оновлюємо глобальну змінну
        pensTypeValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', pensTypeValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function pensUpdate() {
    // Отримуємо нове значення вибору
    const newSelectedValue = pensiaVal.value;

    // Перевіряємо, чи значення вибору змінилося
    if (newSelectedValue !== pensiaValue) {
        // Оновлюємо глобальну змінну
        pensiaValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', pensiaValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function dovidkaUpdate() {
    // Отримуємо нове значення вибору
    const newSelectedValue = dovidkaVal.value;

    // Перевіряємо, чи значення вибору змінилося
    if (newSelectedValue !== dovidkaValue) {
        // Оновлюємо глобальну змінну
        dovidkaValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', dovidkaValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function civilUpdate() {
    // Отримуємо нове числове значення вибору
    const newSelectedValue = parseFloat(civilyearsVal.value);

    // Перевіряємо, чи значення вибору змінилося
    if (!isNaN(newSelectedValue) && newSelectedValue !== civilyearsValue) {
        // Оновлюємо глобальну числову змінну
        civilyearsValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', civilyearsValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

function warUpdate() {
    // Отримуємо нове числове значення вибору
    const newSelectedValue = parseFloat(waryearsVal.value);

    // Перевіряємо, чи значення вибору змінилося
    if (!isNaN(newSelectedValue) && newSelectedValue !== waryearsValue) {
        // Оновлюємо глобальну числову змінну
        waryearsValue = newSelectedValue;

        // Викликаємо додаткові дії при зміні вибору
        console.log('Змінено вибір на:', waryearsValue);
        // Тут ви можете викликати інші функції або виконати інші дії
    }
}

// Додаємо обробник події 'change' для вибору
zvanieVal.addEventListener('change', zvanieUpdate);
strVal.addEventListener('change', strUpdate);
pensiaVal.addEventListener('change', pensUpdate);
civilyearsVal.addEventListener('change', civilUpdate);
waryearsVal.addEventListener('change', warUpdate);

// Викликаємо функцію оновлення для початкового значення
zvanieUpdate();
strUpdate();
pensUpdate();
civilUpdate();
warUpdate();
dovidkaUpdate();
pensTypeUpdate();

  // Глобальна змінна для зберігання останнього активного дата-нейм
  let year = null;
  let chernobylec = null;
  let health = null;
  let invalidnist = null;
  let invGroup = null;
  let dovidka = null;
  let pensValue = null;
  let vtrata = null;

  // Функція, яка ініціалізує обробники подій і повертає глобальну змінну
  function initYearSelection() {
    let checkboxes = document.querySelectorAll('.year-wrap input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          // Оновлюємо глобальну змінну при виборі нового чекбоксу
          year = checkbox.getAttribute('id');
          console.log(year);
        }
      });
    });
    // Повертаємо глобальну змінну
    return year;
  }
  
  function initChornSelection() {
    let checkboxes = document.querySelectorAll('.chornobylec input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          // Оновлюємо глобальну змінну при виборі нового чекбоксу
          chernobylec = checkbox.getAttribute('id');
          console.log(chernobylec);
        }
        if(chernobylec === "firstCategoy") {
          chernobylec = 1;
        } else if (chernobylec === "secondCategoy") {
          chernobylec = 0.95;
        } else {
          chernobylec = 0;
        }
      });
    });
    // Повертаємо глобальну змінну
    return chernobylec;
  }

  function initHealthSelection() {
    let checkboxes = document.querySelectorAll('.health input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          // Оновлюємо глобальну змінну при виборі нового чекбоксу
          health = checkbox.getAttribute('id');
          console.log(health);
        }
      });
    });
    // Повертаємо глобальну змінну
    return health;
  }

let invSelection = {
  invalidnist: "",
  invGroup: "",

  initInvalidnistSelection: function () {
    console.log("initInvalidnistSelection called");
    let checkboxes = document.querySelectorAll('.invalidnist input[type="radio"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          invSelection.invalidnist = checkbox.getAttribute('id');
          console.log(invSelection.invalidnist);
        }
      });
    });
  },

  initInvGroupSelection: function () {
    console.log("initInvGroupSelection called");
    let checkboxes = document.querySelectorAll('.inv-group input[type="radio"]');
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener('change', function () {
        if (checkbox.checked) {
          invSelection.invGroup = checkbox.getAttribute('id');
          console.log(invSelection.invGroup);
        }
      });
    });
  },

  updateInvPercent: function () {
    console.log("updateInvPercent called");
    let invPercentMap = {
      "army": {
        "1-3": 0.7,
        "2-3": 0.6,
        "3": 0.4
      },
      "war": {
        "1-3": 1,
        "2-3": 0.8,
        "3": 0.6
      }
    };

    if (invPercentMap[invSelection.invalidnist] && invPercentMap[invSelection.invalidnist][invSelection.invGroup]) {
      let invPercent = invPercentMap[invSelection.invalidnist][invSelection.invGroup];
      console.log(invSelection.invalidnist, invSelection.invGroup, invPercent);
      return invPercent;
    } else {
      console.log("Invalid invalidnist or invGroup");
      return 0; // Default value or handle the error
    }
  }
};

// Окремий виклик для ініціалізації
invSelection.initInvalidnistSelection();
invSelection.initInvGroupSelection();

  
  function initDovidkaSelection() {
    let checkboxes = document.querySelectorAll('.dovidka input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          // Оновлюємо глобальну змінну при виборі нового чекбоксу
          dovidka = checkbox.getAttribute('id');
          console.log(dovidka);
        }
      });
    });
    // Повертаємо глобальну змінну
    return dovidka;
  }

  function initVtrataSelection() {
    let checkboxes = document.querySelectorAll('.byloss input[type="radio"]');
    checkboxes.forEach(function(checkbox) {
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          // Оновлюємо глобальну змінну при виборі нового чекбоксу
          vtrata = checkbox.getAttribute('id');
          console.log(vtrata);
        }
      });
    });
    // Повертаємо глобальну змінну
    return vtrata;
  }

  // Викликаємо функцію для ініціалізації
  let yearf = initYearSelection();
  let chornf = initChornSelection();
  let healthf = initHealthSelection();
  let vtrataf = initVtrataSelection();
  let dovidkaf = initDovidkaSelection();

  function updatePensValue() {
    zvanieUpdate(); //Звання яке було
    strUpdate(); //Структура в якій служив
    pensUpdate(); //Розмір пенсії
    civilUpdate(); //К-сть років цивільного стажу
    warUpdate(); //К-сть років війскового стажу
    updateNumber(); //Вислуга років
    dovidkaUpdate(); //Розмір грошового забезбечення
    pensTypeUpdate(); //Тип пенсії
    // Виклик функції для оновлення відсотка
    let invPercent = invSelection.updateInvPercent();

    
    let mixedVal = civilyearsValue + waryearsValue;
    console.log(mixedVal);
    let pensValue = 0; // Initialize pensVa
    console.log(`invPercent: ${invPercent}`);
    console.log(`Initial pensValue: ${pensValue}`);
    console.log(`Initial pensValue: ${chernobylec}`);
    if (pensTypeValue === "За вислугою років") {
      console.log(`Тип пенсії: ${pensTypeValue}`)
      let years = lastNumber - 20;
      years = years * 3;
      pensValue = 50 + years;
      pensValue = pensValue / 100;
      if (year === '2011' && pensValue > 0.8) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.8)
        }
      } else if (year === '2011-2014' && pensValue > 0.9) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.9)
        }
      }else if (year === '2014-2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.7)
        }
      }else if (year === '2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 0.95);
        } else if (strVal === 'Міліція (МВС)' || strVal === 'Національна поліція'){
          pensValue = Math.min(pensValue, 0.7)
        }else {
          pensValue = Math.min(pensValue, 0.7) + 0.2;
        }
      } else {
        pensValue = pensValue;
      }
    } else if (pensTypeValue === "Звільнення у зв'язку зі станом здоров'я") {
      console.log(`Тип пенсії: ${pensTypeValue}`)
      let years = lastNumber - 20;
      years = years * 3;
      pensValue = 50 + years + 5;
      pensValue = pensValue / 100;
      if (year === '2011' && pensValue > 0.8) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.8)
        }
      } else if (year === '2011-2014' && pensValue > 0.9) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.9)
        }
      }else if (year === '2014-2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.7)
        }
      }else if (year === '2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 0.95);
        } else if (strVal === 'Міліція (МВС)' || strVal === 'Національна поліція'){
          pensValue = Math.min(pensValue, 0.7)
        }else {
          pensValue = Math.min(pensValue, 0.7) + 0.2;
        }
      } else {
        pensValue = pensValue;
      }
    } else if (pensTypeValue === "За змішаним стажем") {
      console.log(`Тип пенсії: ${pensTypeValue}`)
      let years = mixedVal - 25;
      years = years * 1;
      if (health === "yes") {
        pensValue = 50 + years + 5;
        pensValue = pensValue / 100;
      }else {
        pensValue = 50 + years;
        pensValue = pensValue / 100;
      }
      if (year === '2011' && pensValue > 0.8) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.8)
        }
      } else if (year === '2011-2014' && pensValue > 0.9) {
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.9)
        }
      }else if (year === '2014-2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = Math.min(pensValue, 0.95);
        } else {
          pensValue = Math.min(pensValue, 0.7)
        }
      }else if (year === '2018' && pensValue > 0.7){
        if (chernobylec === 1) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 1);
        } else if (chernobylec === 0.95) {
          pensValue = pensValue + 0.2;
          pensValue = Math.min(pensValue, 0.95);
        } else if (strVal === 'Міліція (МВС)' || strVal === 'Національна поліція'){
          pensValue = Math.min(pensValue, 0.7)
        }else {
          pensValue = Math.min(pensValue, 0.7) + 0.2;
        }
      } else {
        pensValue = pensValue;
      }
    } else if (pensTypeValue === "По втраті годувальника") {
      console.log(`Тип пенсії: ${pensTypeValue}`)
      if (vtrata === 'radio-8') {
        pensValue = 0.7;
      } else if (vtrata === 'radio-10') {
        pensValue = 0.3;
      }
    }
    pensValue = Number(pensValue)
    console.log(`Процент который нам нужен: ${pensValue}`);
    return pensValue;
  }


  calculatePension = function() {
    zvanieUpdate();
    strUpdate();
    pensUpdate();
    civilUpdate();
    warUpdate();
    updateNumber();
    dovidkaUpdate();
    pensTypeUpdate();
    let pensValue = updatePensValue();
    // Виклик функції для оновлення відсотка
    let invPercent = invSelection.updateInvPercent();
    console.log(`Процент который нам нужен в начале просчета пенсии: ${pensValue}`);
    let loan = updateLoan(strValue, zvanieValue);
    let result = 0; // Initialize result
    //По інвалідності
    if (pensTypeValue === "По інвалідності") {
      console.log(`invpercent по інвалідності: ${invPercent}, ${dovidka}`)
      if (dovidka === "radio-3") {
        result = dovidkaValue * invPercent;
        console.log(`first result for invalidnist pens: ${result}`)
        if (invSelection.invalidnist === "war") {
          console.log(`вид інвалідності і результат перед прорахунком додаткового відсотка: ${result}, ${invSelection.invalidnist}`)
          result = result + result * 0.25;
          console.log(`вид інвалідності і результат після прорахунку додаткового відсотка: ${result}, ${invSelection.invalidnist}`)
        }
        result = result + 0.14 * result;
        console.log(`result додавання 14%: ${result}`)
        preResult = result * 0.197;
        console.log(`pre-result з відбору 19.7%: ${preResult}`)
        if (preResult > 1500) {
          preResult = 1500
        }
        console.log(`pre-result: ${preResult}`)
        result = preResult + result;
        console.log(`остаточний результат з інвалідності по війні: ${result}`)
      } else if (dovidka === "radio-2") {
        result = loan * invPercent;
        console.log(`війна без довідки: ${result}`)
        if (invSelection.invalidnist === "war") {
          console.log(result, invSelection.invalidnist)
          result = result + result * 0.25;
          console.log(result, invSelection.invalidnist)
        }
        result = result + 0.14 * result;
        console.log(`result: ${result}`)
        preResult = result * 0.197;
        console.log(`pre-result: ${preResult}`)
        if (preResult > 1500) {
          preResult = 1500
        }
        console.log(`pre-result: ${preResult}`)
        result = preResult + result;
      }
      //По вислузі років
    } else if (pensTypeValue === "За вислугою років") {
      if (dovidka === "radio-3") {
        result = dovidkaValue * pensValue;
        console.log(`result вислуга: ${result}`)
      } else if (dovidka === "radio-2") {
        result = loan * pensValue;
        console.log(`вислуга без довідки: ${result}`)
      }
      result = result + 0.14 * result;
      console.log(`result: ${result}`)
      preResult = result * 0.197;
      console.log(`pre-result: ${preResult}`)
      if (preResult > 1500) {
        preResult = 1500
      }
      console.log(`pre-result: ${preResult}`)
      result = preResult + result;
      //По стану здоров'я 
    } else if (pensTypeValue === "Звільнення у зв'язку зі станом здоров'я") {
      if (dovidka === "radio-3") {
        console.log(pensValue)
        result = dovidkaValue * pensValue;
        console.log(`result здоровя: ${result}`)
      } else if (dovidka === "radio-2") {
        console.log(pensValue)
        result = loan * pensValue;
        console.log(`звільнення по здоровя без довідки: ${result}`)
      }
      result = result + 0.14 * result;
      console.log(`result: ${result}`)
      preResult = result * 0.197;
      console.log(`pre-result: ${preResult}`)
      if (preResult > 1500) {
        preResult = 1500
      }
      console.log(`pre-result: ${preResult}`)
      result = preResult + result;
      //Змішаний стаж
    } else if (pensTypeValue === "За змішаним стажем") {
      if (dovidka === "radio-3") {
        console.log(pensValue)
        result = dovidkaValue * pensValue;
        console.log(`result стаж: ${result}`)
      } else if (dovidka === "radio-2") {
        console.log(pensValue)
        result = loan * pensValue;
        console.log(`мішаний стаж стаж без довідки: ${result}`)
      }
      result = result + 0.14 * result;
      console.log(`result: ${result}`)
      preResult = result * 0.197;
      console.log(`pre-result: ${preResult}`)
      if (preResult > 1500) {
        preResult = 1500
      }
      console.log(`pre-result: ${preResult}`)
      result = preResult + result;
      //Втрата годувальника
    } else if (pensTypeValue === "По втраті годувальника") {
      if (dovidka === "radio-3") {
        console.log(pensValue)
        result = dovidkaValue * pensValue;
        console.log(`годувальник: ${result}`)
      } else if (dovidka === "radio-2") {
        console.log(pensValue)
        result = loan * pensValue;
        console.log(`годувальник без довідки: ${result}`)
      }
      result = result + 0.14 * result;
      console.log(`result: ${result}`)
      preResult = result * 0.197;
      console.log(`pre-result: ${preResult}`)
      if (preResult > 1500) {
        preResult = 1500
      }
      console.log(`pre-result: ${preResult}`)
      result = preResult + result;
    }
    if (year !== '2018') {
      console.log(`проверка на добавленние 2к грн(перед добавлением) - ${result}`)
      result = result + 2000
      console.log(`проверка на добавленние 2к грн(после добавления) - ${result}`)
    }
    console.log(`результат перед возвратом функции - ${result}`)
    return result;
  }

// result func

let resultat = document.querySelector('#resultBtn');
let resultDiv;
resultat.addEventListener('click', function (e) {
//e.preventDefault();
// Викликаємо функцію оновлення для початкового значення
zvanieUpdate();
strUpdate();
pensUpdate();
civilUpdate();
warUpdate();
updateNumber();
dovidkaUpdate();
pensTypeUpdate();
let pensValue = updatePensValue();
// Виклик функції для оновлення відсотка
let invPercent = invSelection.updateInvPercent();
console.log(pensValue);
let loan = updateLoan(strValue, zvanieValue);
console.log(`Грошове забезпечення:${loan}, 
  роки звільнення: ${year} , 
  Чи є чорнобильське?: ${chernobylec}, 
  Ви звільнились у зв'язку зі станом здоров'я?: ${health}, 
  Звільнилися по інфалідності?: ${invSelection.invalidnist}, 
  Група інвалідності?: ${invSelection.invGroup}, 
  Чи є довідка?: ${dovidka}, 
  Звання: ${zvanieValue}, 
  Структура: ${strValue}, 
  Розмір пенсії: ${pensiaValue}, 
  Роки цивільного стажу: ${civilyearsValue}, 
  Роки військового стажу: ${waryearsValue}, 
  Роки вислуги: ${lastNumber},
  Відсоток з інвалідності: ${invPercent},
  Розмір грошового забезбечення з довідки: ${dovidkaValue},
  Вид пенсії: ${pensTypeValue},
  Втрата годувальника: ${vtrata}
  `)
let result = calculatePension();
    result = Math.round(result);
    resultDiv = document.querySelector('.result.price')
    resultDiv.innerText = `${result} грн`
    console.log(`результат пенсії: ${result} грн`)
});
