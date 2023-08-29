/* {"host":"146.204.224.152", 
    "user_name":"feest6811", 
    "time":"21/Jun/2019:15:45:24 -0700",
    "request":"POST /incentivize HTTP/1.1"}
*/

// обработка ощибок, если ничего не найдено регеспом
// создать хтмл страницу - выбрать (кнопка) и открыть файл  - обработать файл (кнопка) 
// - создать массив объектов по вышеописанной структуре (хост юзер время звпрос)
// - показать таблицу из 4 колонок с заголовками с (первыми 5-10) объектами


document.getElementById('openButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileInput');
    const fileContentsDiv = document.getElementById('fileContents');

    const selectedFile = fileInput.files[0];
    if (!selectedFile) {
        fileContentsDiv.textContent = 'Файл не выбран.';
        return;
    }

    const reader = new FileReader();
    reader.onload = function(event) {
        const fileContents = event.target.result;
        const lines = fileContents.split('\n').filter(line => line.trim() !== '');
    

        const pattern = /(\d+.\d+.\d+.\d+) - ([\w]*[\d]*|[-]) \[(.*)\] \"(.*)\"/
        const log_array = []

        for (const line of lines) {
            const lineMatches = Array.from(line.MatchAll(pattern));
            log_array.push(...lineMatches)
        }
        const matchesText = log_array.map(match => match[0]).join(', ');
        fileContentsDiv.textContent = 'Совпадения: ' + matchesText;
    }

});





