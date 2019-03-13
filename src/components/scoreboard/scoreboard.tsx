import last from 'lodash.last';
import React, {
  FunctionComponent,
  MutableRefObject,
  ReactElement,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { IResult, ISet, Team } from '../app/types';
import {
  Body,
  Cell,
  Column,
  Content,
  Emoji,
  Foot,
  Head,
  Table,
} from './styles';
import { IProps } from './types';

export const Scoreboard: FunctionComponent<IProps> = ({
  game,
}: IProps): ReactElement => {
  const [scoreboardMinHeight, setScoreboardMinHeight] = useState('0');
  const bodyColumnRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const headRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const footRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword
  const footCellRef: MutableRefObject<HTMLDivElement | null> = useRef(null); // tslint:disable-line: no-null-keyword

  useEffect(() => {
    const { current } = bodyColumnRef;
    if (current === null) return undefined;

    current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [game.sets.length]);

  useLayoutEffect(() => {
    const { current: currentHeadRef } = headRef;
    const { current: currentFootRef } = footRef;
    const { current: currentCellRef } = footCellRef;
    if (
      currentHeadRef === null ||
      currentFootRef === null ||
      currentCellRef === null
    ) {
      return undefined;
    }

    const newScoreboardMinHeight: string = `${currentHeadRef.offsetHeight +
      currentFootRef.offsetHeight +
      currentCellRef.offsetHeight}px`;
    setScoreboardMinHeight(newScoreboardMinHeight);
  }, []);

  return (
    <Table scoreboardMinHeight={scoreboardMinHeight}>
      <Head ref={headRef}>
        {game.teams.map((team: Team) => (
          <Column key={team}>
            <Cell reverse={team === last(game.teams)}>
              {game.leader === team ? (
                <>
                  <Content>{team}</Content>
                  <Emoji>🏁</Emoji>
                </>
              ) : (
                <Content>{team}</Content>
              )}
            </Cell>
          </Column>
        ))}
      </Head>

      <Body>
        {game.teams.map((team: Team, teamIndex: number) => (
          <Column key={team} ref={bodyColumnRef}>
            {game.sets.map((set: ISet) => (
              <Cell key={set.round}>
                {!set.score && set.bid.team === team && (
                  <Content>({set.bid.points})</Content>
                )}

                {set.score && <Content>{set.score[teamIndex].points}</Content>}
              </Cell>
            ))}
          </Column>
        ))}
      </Body>

      <Foot ref={footRef}>
        {game.score.map((score: IResult) => (
          <Column key={score.team}>
            <Cell ref={footCellRef} reverse={score.team === last(game.teams)}>
              {game.winner !== undefined && game.winner.team === score.team ? (
                <>
                  <Content>{score.points}</Content>
                  <Emoji>🏆</Emoji>
                </>
              ) : (
                <Content>{score.points}</Content>
              )}
            </Cell>
          </Column>
        ))}
      </Foot>
    </Table>
  );
};
