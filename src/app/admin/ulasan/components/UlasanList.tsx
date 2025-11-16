'use client';

import { Review } from "@/utils/dataTypes/ReviewData";
import { Col, Row } from "react-bootstrap";
import { Envelope, Phone, Star, StarFill, Suitcase2 } from "react-bootstrap-icons";

export default function UlasanList({ reviews, onDelete, onHighlight }: { reviews: Review[], onDelete: (e: number) => void, onHighlight: (e: number, b: boolean) => void }) {

  if (reviews.length === 0) {
    return (
      <div className="ulasan-list-container ulasan-list-empty">
        <p>Tidak ada ulasan yang cocok dengan filter Anda.</p>
      </div>
    );
  }

  const grouped = Object.groupBy(reviews, (r, i) => i % 2 == 0 ? 'e' : 'o');

  return (
    <div className="ulasan-list-container">
      <div className="ulasan-list-header">
        <div className="col-info">Informasi Produk</div>
        <div className="col-penilaian">Penilaian Pembeli</div>
        <div className="col-tindakan">Tindakan</div>
        <div className="col-info">Informasi Produk</div>
        <div className="col-penilaian">Penilaian Pembeli</div>
        <div className="col-tindakan">Tindakan</div>
      </div>

      {
        grouped.e!.map((group, i) => {
          const rev1 = grouped.e![i];
          const rev2 = grouped.o ? grouped.o![i] : null;
          return (
            <Row key={i}>
              <Col>
                <div className="ulasan-list-card">
                  <div className="col-info">
                    <div className="user-info flex-column align-items-start">
                      <span>{rev1.user.name}</span><br />
                      <span className="user-info-small"><Envelope /> {rev1.user.email}</span><br />
                      <span className="user-info-small"><Phone /> {rev1.user.phoneNo}</span><br />
                      <span className="user-info-small"><Suitcase2 /> {rev1.user.details}</span><br />
                    </div>
                  </div>

                  <div className="col-penilaian">
                    <div className="flex-row">
                      {Array(5).fill(0).map((val, index) => {
                        return <span className="px-1" key={index} >{index < rev1.review.rating ? <StarFill color="yellow" /> : <Star />}</span>;
                      })
                      }
                    </div>
                    <p className="comment-text">{rev1.review.description}</p>
                  </div>

                  <div className="col-tindakan">
                    <button
                      className={`button-balas ${rev1.review.highlighted ? 'active' : ''}`}
                      onClick={() => onHighlight(rev1.id, !rev1.review.highlighted)}
                    >
                      {rev1.review.highlighted ? 'Unhighlight' : 'Highlight'}
                    </button>
                    <button
                      className="button-balas"
                      onClick={() => onDelete(rev1.id)}
                    >
                      Buang
                    </button>
                  </div>
                </div>
              </Col>
              {
                rev2 ?
                  (
                    <Col>
                      <div className="ulasan-list-card">
                        <div className="col-info">
                          <div className="user-info flex-column align-items-start">
                            <span>{rev2.user.name}</span><br />
                            <span className="user-info-small"><Envelope /> {rev2.user.email}</span><br />
                            <span className="user-info-small"><Phone /> {rev2.user.phoneNo}</span><br />
                            <span className="user-info-small"><Suitcase2 /> {rev2.user.details}</span><br />
                          </div>
                        </div>

                        <div className="col-penilaian">
                          <div className="flex-row">
                            {Array(5).fill(0).map((val, index) => {
                              return <span className="px-1" key={index} >{index < rev2.review.rating ? <StarFill color="yellow" /> : <Star />}</span>;
                            })
                            }
                          </div>
                          <p className="comment-text">{rev2.review.description}</p>
                        </div>

                        <div className="col-tindakan">
                          <button
                            className={`button-balas ${rev2.review.highlighted ? 'active' : ''}`}
                            onClick={() => onHighlight(rev2.id, !rev2.review.highlighted)}
                          >
                            {rev2.review.highlighted ? 'Unhighlight' : 'Highlight'}
                          </button>
                          <button
                            className="button-balas"
                            onClick={() => onDelete(rev2.id)}
                          >
                            Buang
                          </button>
                        </div>
                      </div>
                    </Col>
                  )
                  :
                  (
                    <Col>
                    </Col>
                  )
              }
            </Row>)
        }
        )}
    </div>
  );
}