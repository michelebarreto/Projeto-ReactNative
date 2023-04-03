import React from "react";
import { StyleSheet, View, } from 'react-native';
import Detalhes from "./Cesta/componetes/Detalhes";
import Itens from "./Cesta/componetes/Itens";
import Home from "./Cesta/componetes/Home";




export default function Cesta({ topo, detalhes, itens }) {
    return (
        <>
            <Home {...topo} />


            <View style={estilos.cesta}>

                <Detalhes {...detalhes} />
                <Itens {...itens} />
            </View>
        </>

    )
}

const estilos = StyleSheet.create({
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    }

});