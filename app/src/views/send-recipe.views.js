import React from 'react'

import ImageLogo from '../assets/images/logo.png'

import Image from '../components/Media/Image'
import { Container } from '../components/Layout/Container'

import { storeRecipe } from '../services/storeRecipe.service'

import {
    app_title
} from '../constants/string'

export default function SendRecipe() {

    const [image, setImage] = React.useState(null)
    const [name, setName] = React.useState('')
    const [spotlight, setSpotlight] = React.useState(false)
    const [intro, setIntro] = React.useState('')

    const formValues = {
        image,
        name,
        spotlight,
        intro
    }

    const callStoreRecipe = () => {
        console.log('oi')
        storeRecipe(formValues).then(response  => {
            // if (response.status === 200) response.json().then((res) => { setCards(res.data) })
            // if (response.status === 404) response.json().then((res) => { handleError(res) })
        })
    }

    return(
        <>
            <Container
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6 md:tw-pt-6 md:tw-pb-12"
            >
                <Image
                    src={ImageLogo}
                    alt={app_title}
                    styling="tw-w-48 md:tw-w-1/6"
                />
            </Container>
            <Container
                styling="tw-w-full tw-flex tw-justify-self-center tw-justify-center tw-py-6 md:tw-pt-6 md:tw-pb-12"
            >
                <form
                    className="tw-grid md:tw-grid-cols-2 tw-gap-16"
                >
                    <div className="tw-grid tw-gap-4">
                        <div>
                            <label className="tw-block tw-text-gray-700 tw-mb-4" htmlFor="file">
                                Imagem da receita
                            </label>
                            <input type="file" name="file" id="file" onChange={e => setImage(e.target.files[0])} className="tw-form-input" />
                        </div>
                        <div>
                            <label className="tw-block tw-text-gray-700 tw-mb-4" htmlFor="name">
                                Nome da receita
                            </label>
                            <input type="text" name="name" id="name" onChange={e => setName(e.target.value)} className="tw-w-full tw-form-input tw-px-4 tw-py-3" />
                        </div>
                        <div>
                            <label className="tw-block tw-text-gray-700 tw-mb-4" htmlFor="spotlight">
                                Destaque
                            </label>
                            <select className="tw-w-full tw-form-select tw-px-4 tw-py-3"
                                name="spotlight" id="spotlight" onChange={e => setSpotlight(e.target.value)}
                            >
                                <option value="" disabled>Receita de destaque?</option>
                                <option value="true">Sim</option>
                                <option value="false">Não</option>
                            </select>
                        </div>
                        <div>
                            <label className="tw-block tw-text-gray-700 tw-mb-4" htmlFor="spotlight">
                                Resumo da receita
                            </label>
                            <textarea defaultValue={formValues.intro} className="tw-w-full" onChange={e => setIntro(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        aqui vai o preview
                    </div>
                    <button
                        type="button"
                        className="tw-bg-green-600 tw-text-white tw-p-2"
                        onClick={() => callStoreRecipe()}
                    >
                        Enviar
                    </button>
                </form>
            </Container>
        </>
    )
}