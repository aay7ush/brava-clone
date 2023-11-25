export interface SlideProps {
  image: string
  title: string
  right?: boolean
}

export interface CustomArrowProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  icon: JSX.Element
  direction: string
}

export interface CardProps {
  image: string
  title: string
}
