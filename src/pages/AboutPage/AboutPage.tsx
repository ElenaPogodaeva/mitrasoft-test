export const AboutPage = () => {
  return (
    <div className="mt-2 mb-2">
      <h1 className="h3">Погодаева Елена</h1>
      <h2 className="h5 mb-3">Frontend-разработчик</h2>
      <p>
        Образование высшее математическое. <br />
        Проходила обучение на курсах Rolling Scopes School. <br />
        Меня интересует frontend разработка.
      </p>
      <p className="mb-0">Мои качества</p>
      <ul>
        <li>ответственность</li>
        <li>аккуратность</li>
        <li>высокая способность к обучению</li>
      </ul>
      <h2 className="h6">Проекты</h2>
      <ul>
        <li>
          <a href="https://github.com/ElenaPogodaeva/rslang" target="_blank" rel="noreferrer">
            RS Lang
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ElenaPogodaeva/project-management-app"
            target="_blank"
            rel="noreferrer"
          >
            Project Management App
          </a>
        </li>
        <li>
          <a href="https://github.com/ElenaPogodaeva/minesweeper" target="_blank" rel="noreferrer">
            Minesweeper
          </a>
        </li>
      </ul>
      <p>
        <a href="https://github.com/ElenaPogodaeva" target="_blank" rel="noreferrer">
          GitHub
        </a>
      </p>
      <h2 className="h6">Технические навыки</h2>
      <ul>
        <li>Html</li>
        <li>CSS, SCSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Angular</li>
        <li>Git</li>
      </ul>
      <h2 className="h6">Контакты</h2>
      <ul>
        <li>
          <a href="https://t.me/PogodaevaElena" target="_blank" rel="noreferrer">
            Telegram
          </a>
        </li>
        <li>
          <a href="mailto:pogodaeva.elena2020@gmail.com" target="_blank" rel="noreferrer">
            Email
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AboutPage;
