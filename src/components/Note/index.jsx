import { Container } from "./styles";
import {Tag} from '../Tag'

export function Note({date, ...rest}){
  return (
    <Container {...rest}>
      <h1>{date.title}</h1>

      {
        date.tags &&
        <footer>
          {
            date.tags.map(tag => <Tag title={tag.name} key={tag.id}/>)
          }
        </footer>
      }
    </Container>
  )
}