import React from "react"
import ReactDOM from "react-dom"
import Typography from "@material-ui/core/Typography"
import { tryCatch, compose, either, constant, identity, curry, Maybe } from "crocks"

import { either as freeEither } from 'crocks/pointfree/either'

const { Nothing, Just } = Maybe

// wrap :: a -> [ a ]
const wrap =
  x => <div>{x}</div>

// empty :: () -> [ a ]
const empty =
  () => <div>Nothing</div>

const toEle =
  either(empty, wrap)

// const safeTest = curry(n =>
//     compose(
//         either(constant("inherit"), identity),
//         tryCatch(Number(n))
//     )
// )

const maybeUserF = (_user) => _user ? Maybe.Just(_user) : Maybe.Nothing();

export default function Main() {
    const mayBeUser = maybeUserF(null)
    const e = toEle(mayBeUser)
    
    return (
        e
        // <div>
        //     <Typography variant={"h2"}>Hi There...</Typography>
        // </div>
    )
}