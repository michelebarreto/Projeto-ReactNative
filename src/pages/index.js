import React from "react";
import { FlatList, StyleSheet, View, } from 'react-native';
import Detalhes from "./Cesta/componetes/Detalhes";
import Itens from "./Cesta/componetes/Itens";
import Home from "./Cesta/componetes/Home";
import Texto from "../components/Texto";




export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <FlatList data={itens.lista}
                 renderItem={Itens}
                 keyExtractor={({ nome }) => nome}
                 ListHeaderComponent={() => {
                    return<>
                        <Home {...topo} />
                        <View style={estilos.cesta}>

                            <Detalhes {...detalhes} />
                            <Texto style={estilos.titulo}>{itens.titulo}</Texto>

                        </View>

                    </>
                }}
            />

        </>

    )
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32


    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

});