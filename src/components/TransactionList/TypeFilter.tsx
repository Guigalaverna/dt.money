export function TypeFilter({ column }) {
  const { filterName, setFilter } = column;

  return (
    <span style={{ marginTop: "1rem" }}>
      <select
        name="filter"
        id="filter"
        value={filterName}
        style={{
          padding: "15px",
          border: "none",
          background: "transparent",
        }}
        onChange={e => setFilter(e.target.value)}
      >
        <option value="">Selecione um tipo</option>
        <option value="Entrada">Entrada</option>
        <option value="Saída">Saída</option>
      </select>
    </span>
  );
}
