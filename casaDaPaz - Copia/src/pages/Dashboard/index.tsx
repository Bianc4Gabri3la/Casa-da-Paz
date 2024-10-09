import { useEffect } from "react";
import { LayoutDashboard } from "../../components/LayoutDashboard";
import { IToken } from "../../interfaces/token";
import { verificaTokenExpirado } from "../../services/token";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

    const navigate = useNavigate()

    useEffect(() => {
        let lsToken = localStorage.getItem('americanos.token')

        let token: IToken | null = null

        if (typeof lsToken === 'string') {
            token = JSON.parse(lsToken)
        }

        if (!token || verificaTokenExpirado(token.accessToken)) {
            navigate('/')
        }

    }, [])

    return (
        <>
            <LayoutDashboard>
                <h1>Casa da Paz</h1>
                <h2>Sobre Nós</h2>
                A Associação Assistencial e Promocional Casa da Paz é uma entidade sem fins lucrativos que oferece apoio integral a crianças e adolescentes no município de Umuarama, Paraná. Mantida por doações, parcerias, convênios e voluntários, nossa missão é garantir um ambiente seguro e acolhedor.
                {<img
                    src="/imagens/imgsobrenos.jpg"
                    alt="Descrição da Imagem"
                    width={500}
                    height={300}
                />}
                <br />
                Fundada para responder à urgência da alimentação, a Casa da Paz rapidamente percebeu que a questão era mais ampla. Observamos que muitas crianças estavam vulneráveis nas ruas, enfrentando altos índices de repetência escolar e evasão, e expostas a perigos graves como o tráfico de drogas e a prostituição.

                Nosso objetivo é proporcionar um ambiente seguro e acolhedor, onde cada jovem possa ter acesso a oportunidades de aprendizado, apoio psicossocial e atividades enriquecedoras. Trabalhamos para oferecer um futuro melhor, garantindo que nossas crianças e adolescentes tenham as ferramentas necessárias para crescer com dignidade e esperança.

            </LayoutDashboard>
        </>
    )
}
