export default function RulesOfJsx() {
  return (
    <div className="rules">
      <h1>The Rules of JSX</h1>

      <h3>1. JSX must return a single root element</h3>
      <p>Wrap elements inside a single parent (div or Fragment).</p>

      <h3>2. All tags must be closed</h3>
      <p>Self-closing tags like &lt;img /&gt; must be properly closed.</p>

      <h3>3. Use camelCase for attributes</h3>
      <p>Examples: className, onClick, htmlFor.</p>
    </div>
  );
}
