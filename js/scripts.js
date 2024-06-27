const cleave = new Cleave('#quantity-input', {
    numeral: true,
    numeralThousandsGroupStyle: 'thousand',
    prefix: 'R$ ',
    delimiter: '.',
    numeralDecimalMark: ',',
    numeralDecimalScale: 2
});

document.getElementById('button-increase').addEventListener('click', function() {
    changeAmount(1);
});

document.getElementById('button-decrease').addEventListener('click', function() {
    changeAmount(-1);
});

function changeAmount(direction) {
    const value = cleave.getRawValue();
    let amount = parseFloat(value.replace('R$ ', '')) || 0;
    amount = (amount + direction * 0.01).toFixed(2);
    cleave.setRawValue(amount);
}