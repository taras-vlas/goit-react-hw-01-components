#  

Критерии приема
Создан репозиторий goit-react-hw-01-components.
Компоненты всех заданий рендерятся на одной странице, внутри общего контнейра - корневого компонента <App>.
При сдаче домашней работы есть ссылка на репозиторий с исходным кодом проекта.
В шапке репозитория есть ссылка на живую страницу на GitHub pages.
При посещении рабочей страницы (GitHub pages) задания, в консоли нету ошибок и предупреждений.
Для каждого компонента есть отдельная папка с файлом React-компонента и файлом стилей.
Для компонентов описаны propTypes, и, где необходимо, defaultProps.
Все что компонент ожидает в виде пропсов, передается ему при вызове.
Имена компонентов понятные, описательные.
JS-код чистый и понятный, используется Prettier.
Стилизация делается только SASS, CSS-модулями или Styled Components, поэтому классы в результирующем DOM могут отличаться от примеров.
Достаточно базовой стилизации приложения, в первую очередь оно должно работать, а уже потом быть красивое. Выделяй 20% времени на CSS и 80% на JS.
Задания
Задание 1 - Профиль социальной сети
Профиль социальной сети
Необходимо создать компонент <Profile>, с помощью которого мы могли бы отображать информацию о пользователе социальной сети. Данные о пользователе лежат в файле user.json.

Превью компонента Profile

Описание компонента
Компонент должен принимать несколько пропсов с информацией о пользователе:

name — имя пользователя
tag — тег в социальной сети без @
location — город и страна
avatar — url на изображение
stats — объект с информацией об активности
Компонент должен создавать DOM элемент следующей структуры.

<div class="profile">
  <div class="description">
    <img
      src="https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      alt="Аватар пользователя"
      class="avatar"
    />
    <p class="name">Petra Marica</p>
    <p class="tag">@pmarica</p>
    <p class="location">Salvador, Brasil</p>
  </div>

  <ul class="stats">
    <li>
      <span class="label">Followers</span>
      <span class="quantity">1000</span>
    </li>
    <li>
      <span class="label">Views</span>
      <span class="quantity">2000</span>
    </li>
    <li>
      <span class="label">Likes</span>
      <span class="quantity">3000</span>
    </li>
  </ul>
</div>
Пример использования
import user from 'путь/к/user.json;

<Profile
  name={user.name}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>

Задание 2 - Секция статистики
Секция статистики
Создать компонет <Statistics>, который бы отображал статистику по переданным пропам. К примеру загрузки в облако по типу файлов, посещение веб-страницы пользователями разных стран, финансовые траты и т. п. Данные о статистике лежат в файле statistical-data.json.

Превью компонента Statistics

Описание компонента
Компонент должен принимать два пропа title и stats, в которых указывается заголовок и объект статистики.

title - не обязателен, и если он не передан, не должна рендериться разметка заголовка <h2>.
stats - массив объектов содержащих информацию о элементе статистики. Может иметь произвольное кол-во элементов.
Цвет фона элемента статистики в оформлении можно пропустить, либо создать функцию для генерации случайного цвета.
Компонент должен создавать DOM элемент следующей структуры.

<section class="statistics">
  <h2 class="title">Upload stats</h2>

  <ul class="stat-list">
    <li class="item">
      <span class="label">.docx</span>
      <span class="percentage">4%</span>
    </li>
    <li class="item">
      <span class="label">.mp3</span>
      <span class="percentage">14%</span>
    </li>
    <li class="item">
      <span class="label">.pdf</span>
      <span class="percentage">41%</span>
    </li>
    <li class="item">
      <span class="label">.mp4</span>
      <span class="percentage">12%</span>
    </li>
  </ul>
</section>
Пример использования
import statisticalData from '/путь/к/statistical-data.json';

<Statistics title="Upload stats" stats={statisticalData} />;
<Statistics stats={statisticalData} />;

Задание 3 - Список друзей
Список друзей
Необходимо создать компонент <FriendList>, с помощью которого мы могли бы отображать информацию о друзьях пользователя. Информация о друзьях хранится в файле friends.json.

Превью компонента FriendList

Описание компонента FriendList
Компонент должен принимать один проп friends - массив объектов друзей.

Компонент должен создавать DOM следующей структуры.

<ul class="friend-list">
  <!-- Произвольное кол-во FriendListItem, в зависимости от кол-ва объектов в массиве -->
</ul>
Описание компонента FriendListItem
Компонент должен принимать несколько пропов:

avatar - ссылка на аватар
name - имя друга
isOnline - буль сигнализирующий о состоянии друга, в сети или нет.
В зависимости от пропа isOnline, должен меняться цвет фона span.status. Это можно сделать через разный CSS-класс или Styled Components.

Компонент должен создавать DOM следующей структуры.

<li class="item">
  <span class="status"></span>
  <img class="avatar" src="" alt="" width="48" />
  <p class="name"></p>
</li>
Пример использования
import friends from 'путь/к/friends.json';

<FriendList friends={friends} />,

Задание 4 - История транзакций
История транзакций
Необходимо создать компонент истории транзакций в личном кабинете интернет банка.

Превью компонента TransactionHistory

Данные для списка доступны в формате JSON в файле transactions.json. Это массив объектов, каждый объект описывает одну транзакцию со следующими свойствами:

id — уникальный идентификатор транзакции
type — тип транзакции
amount - сумма транзакции
currency - тип валюты
Описание компонента
Необходимо создать компонент <TransactionHistory> принимающий один проп items - массив объектов транзакций из transactions.json. Компонент создает разметку таблицы. Каждая транзакция это строка таблицы. В примере приведена разметка двух транзакций.

<table class="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Invoice</td>
      <td>125</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>
Пример использования
import transactions from 'путь/к/transactions.json';

<TransactionHistory items={transactions} />;




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
