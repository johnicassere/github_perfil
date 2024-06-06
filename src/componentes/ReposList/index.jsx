import { useEffect, useState } from "react";
import styles from './RepoList.module.css';

const Repo = ({ nomeUsuario }) => {

    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
            .then(res => res.json())
            .then(resJoson => {
                setTimeout(() => {
                    setEstaCarregando(false)
                    setRepos(resJoson)
                }, 2000)

            })

    }, [nomeUsuario]);

    return (
        <div className="container">
            {
                estaCarregando ? (
                    <h1>Carregando ...</h1>
                ) : (

                    <ul className={styles.list}>
                        {/* <li>Repositorios: </li> <br />
                                <hr /> */}
                        {repos.map(repositorios => (
                            <li className={styles.listItem} key={repositorios.id}>
                                <div className={styles.listName}>
                                    <b>Nome: {repositorios.name}</b>
                                </div>
                                <div className={styles.itemLanguage}>
                                    <b>Linguagem: {repositorios.language}</b>
                                </div>
                                <a className={styles.itemLink} href={repositorios.html_url} target="_blank" >
                                    Visitar no Git Hub
                                </a>
                            </li>
                        ))}

                    </ul>

                )
            }

        </div>
    )
}

export default Repo