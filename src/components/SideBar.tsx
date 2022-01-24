import { GenreResponseProps } from '../@types/custom';

import { Button } from '../components/Button';

interface SidebarProps {
  genres: Array<GenreResponseProps>;
  selected: number;
  setSelected: any;
}

export function SideBar(props: SidebarProps) {
  function handleClickButton(id: number) {
    props.setSelected(id);
  }

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {props.genres.map((genre) => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={props.selected === genre.id}
          />
        ))}
      </div>
    </nav>
  );
}
