import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../@types/custom';

import { Button } from '../components/Button';

import { api } from '../services/api';

interface SidebarProps {
  selected: number;
  setSelected: (id: number) => void;
}

export function SideBar(props: SidebarProps) {
  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    props.setSelected(id);
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then((response) => {
      setGenres(response.data);
    });
  }, []);

  return (
    <nav className='sidebar'>
      <span>
        Watch<p>Me</p>
      </span>

      <div className='buttons-container'>
        {genres.map((genre) => (
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
