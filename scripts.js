$('#add').click(() => {
    const text = $('h2').text();
    let num = parseInt(text, 10);
    num += 1;
    $("h2").text(num)
});
$('#vesz').click(() => {
    const text = $('h2').text();
    let num = parseInt(text, 10);
    num -= 1;
    $("h2").text(num)
});