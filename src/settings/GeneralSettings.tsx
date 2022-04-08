// @ts-nocheck
import { FormEvent, useCallback, useMemo, useState } from "react";
import { RiAddLine, RiDeleteBin2Line } from "react-icons/ri";
import { useTable } from "react-table";
import { Input } from "../components/Input";
import { useUser } from "../contexts/UserContext";
import { theme } from "../styles";
import { Avatar, Container, Fieldset, Label } from "./styles/GeneralSettings";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { generateCategory } from "../utils/user/generateCategory";
import { RenderColor } from "../components/RenderColor";

export function GeneralSettings() {
  const { user, categories, categoryController } = useUser();
  const [newCategory, setNewCategory] = useState("");
  const [color, setColor] = useState("#eba417");

  const getCategoriesData = useCallback(() => {
    return categories.map(category => {
      return {
        id: category.id,
        title: category.name,
        color: category.color,
      };
    });
  }, [categories]);

  const data = useMemo(() => {
    return getCategoriesData();
  }, [getCategoriesData]);

  const columns = useMemo(
    () => [
      {
        Header: "Título",
        accessor: "title",
      },
      {
        Header: "Cor",
        accessor: "color",
      },
    ],
    []
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (newCategory.trim().length === 0) {
      toast.error("😭 Por favor, preencha o campo de nova categoria.");
      return;
    }

    const category = generateCategory(newCategory, color);

    categoryController.addCategory(category);
  }

  const table = useTable({ columns, data });
  const { getTableProps, getTableBodyProps, headerGroups, rows } = table;

  return (
    <Container>
      <h2>Configurações da Conta</h2>

      <Fieldset name="principal-informations">
        <legend>Adiconar categorias</legend>

        <form onSubmit={handleSubmit}>
          <ToastContainer position="bottom-right" theme="colored" />

          <main>
            <Label htmlFor="input-name">Categorias</Label>
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr
                    key={headerGroup.id}
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map(column => (
                      <th key={column.id} {...column.getHeaderProps()}>
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                  prepareRow(row);
                  return (
                    <tr key={row.original.id} {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        if (cell.column.Header === "Cor") {
                          return (
                            <td key={cell.column.id} {...cell.getCellProps()}>
                              <RenderColor color={row.original.color} />
                            </td>
                          );
                        }

                        return (
                          <td key={cell.row.id} {...cell.getCellProps()}>
                            {cell.render("Cell")}
                          </td>
                        );
                      })}

                      <td>
                        <button
                          type="button"
                          onClick={() =>
                            categoryController.removeCategory(row.original.id)
                          }
                        >
                          <RiDeleteBin2Line
                            size={24}
                            color={theme.colors.red.value}
                          />{" "}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div id="category">
              <label htmlFor="input-category">Nova categoria</label>
              <div>
                <Input
                  type="text"
                  id="input-category"
                  value={newCategory}
                  onChange={event => setNewCategory(event.target.value)}
                  placeholder="Faculdade"
                />
                <span>
                  <input
                    type="color"
                    value={color}
                    onChange={e => setColor(e.target.value)}
                  />
                </span>
                <button>
                  <RiAddLine size={24} color={theme.colors.shape.value} />
                </button>
              </div>
            </div>
          </main>
        </form>
      </Fieldset>
    </Container>
  );
}
