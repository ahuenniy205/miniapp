let balance = 100;
const balanceEl = document.getElementById("balance");
const depositBtn = document.getElementById("depositBtn");
const withdrawBtn = document.getElementById("withdrawBtn");
const playBtn = document.getElementById("playBtn");
const betAmountEl = document.getElementById("betAmount");
const betChoiceEl = document.getElementById("betChoice");
const resultEl = document.getElementById("result");

balanceEl.textContent = balance;

// Пополнение баланса
depositBtn.onclick = () => {
  let amount = parseInt(prompt("Сколько TON пополнить?"));
  if(amount > 0) {
    balance += amount;
    balanceEl.textContent = balance;
    alert(`Баланс пополнен на ${amount} TON`);
  }
}

// Вывод средств
withdrawBtn.onclick = () => {
  let amount = parseInt(prompt("Сколько TON вывести?"));
  if(amount > 0 && amount <= balance) {
    balance -= amount;
    balanceEl.textContent = balance;
    alert(`Выведено ${amount} TON`);
  } else {
    alert("Неверная сумма для вывода");
  }
}

// Игровая логика рулетки
playBtn.onclick = () => {
  let betAmount = parseInt(betAmountEl.value);
  let betChoice = betChoiceEl.value;

  if(betAmount > balance) {
    alert("Недостаточно баланса");
    return;
  }

  // Генерация случайного числа (0-36)
  let rouletteNumber = Math.floor(Math.random() * 37);
  let rouletteColor = (rouletteNumber % 2 === 0) ? "black" : "red";

  if(rouletteColor === betChoice) {
    balance += betAmount;
    resultEl.textContent = `🎉 Выпало ${rouletteNumber} (${rouletteColor.toUpperCase()}), вы выиграли ${betAmount} TON!`;
  } else {
    balance -= betAmount;
    resultEl.textContent = `💥 Выпало ${rouletteNumber} (${rouletteColor.toUpperCase()}), вы проиграли ${betAmount} TON.`;
  }

  balanceEl.textContent = balance;
}
