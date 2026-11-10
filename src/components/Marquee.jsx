const items = ['Playwright', 'Selenium WebDriver', 'Python', 'Behave BDD', 'REST API', 'GraphQL', 'PostgreSQL', 'Jenkins CI/CD', 'Allure', 'Appium', 'Postman', 'Page Object Model', 'Claude API', 'Playwright MCP']

export default function Marquee() {
  const row = [...items, ...items]
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {row.map((t, i) => (
          <span key={i} className="marquee__item"><span className="accent">✓</span> {t}</span>
        ))}
      </div>
    </div>
  )
}
