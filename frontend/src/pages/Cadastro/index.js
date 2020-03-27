import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [cidade, setCidade] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleCadastro(e) {
        e.preventDefault();

        const data = {
            nome,
            email,
            whatsapp,
            cidade,
            uf
        };

        try {
            const response = await api.post('ongs', data);

            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
        }
    }


    return (
        <div className="cadastro-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link to="/" className="back-link">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para o logon
                    </Link>
                </section>
                <form onSubmit={handleCadastro}>
                    <input
                        placeholder="Nome da ONG"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />

                    <input
                        type="email" placeholder="E-Mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />

                    <input
                        placeholder="WhatsApp"
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />

                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={cidade}
                            onChange={e => setCidade(e.target.value)}
                        />

                        <input
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}