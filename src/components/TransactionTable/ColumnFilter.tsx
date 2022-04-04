export function ColumnFilter({ column }) {
  const { filterName, setFilter } = column;

  return (
    <span style={{ marginTop: "1rem" }}>
      <input
        type="text"
        value={filterName}
        onChange={e => setFilter(e.target.value)}
        style={{
          padding: "15px",
          border: "none",
        }}
        placeholder="Termo de Pesquisa"
      />
    </span>
  );
}
