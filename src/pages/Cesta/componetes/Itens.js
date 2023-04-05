import React from "react";
import Texto from "../../../components/Texto";
import { View, Image, StyleSheet } from "react-native";

export default function Itens({ item: { nome, imagem } }) {
    return <View style={estilos.items}>
          <Image source={imagem} style={estilos.imagens} />
         <Texto style={estilos.nomeItens}>{nome}</Texto>
    </View>

}
const estilos = StyleSheet.create({
    items: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ECECEC",
        paddingVertical: 16,
        paddingVertical: 16,
        marginHorizontal:16,
        alignItems: "center"

    },
    imagens: {
        width: 46,
        height: 46,
        borderRadius: 5
    },
    nomeItens: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
})