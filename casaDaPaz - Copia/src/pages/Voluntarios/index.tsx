import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";


export default function Voluntários() {

    const navigate = useNavigate()

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)){
            navigate('/')
        }

    }, [])

    return (
        <>
            <LayoutDashboard>
                
                <div
                    className="d-flex justify-content-between mt-3"
                >
                    <h1>Voluntários</h1>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            // navigate('')
                        }}
                    >Adicionar</button>

                </div>

                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Telefone</th>
                            <th scope="col">Endereço</th>
                            <th scope="col">Ações</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <th>
                                1
                            </th>
                            <td>Maria Eduarda Baia</td>
                            <td>(44) 99825-5796</td>
                            <td>Rua Ignacio Urbanski, 2151</td>
                            <td>
                                <button
                                    className="btn btn-warning"
                                    type="button"
                                    style={{
                                        marginRight: 5
                                    }}
                                >
                                    Editar
                                </button>
                                <button
                                    className="btn btn-danger"
                                    type="button"
                                    
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    </tbody>

                </table>

            </LayoutDashboard>
        </>
    )
}