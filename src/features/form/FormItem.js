import {useSelector, useDispatch} from "react-redux"
import {formActions} from "./formSlice"

export default function FormItem(props) {
  const dispatch = useDispatch();
  const { inputType} = props

  // const form = useSelector((state) => state.)

  const handleChange = (e) => {
    const {target} = e;
    dispatch(formActions.updateInput({type: inputType, value: target.value}))
  }
  return (
    <label>
      Enter your {inputType}
      <input type="text"  onChange={(e) => handleChange(e)} />
    </label>
  )
}