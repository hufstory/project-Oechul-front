import React, {Component} from 'react';
import './style.scss'

class Tree extends Component {
    render() {
        return (
            <>
    <div class="background">
        {/* <div class="flower roundpetal petal5 flower1">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
        <div class="flower roundpetal petal5 flower2 blueflower">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
        <div class="flower roundpetal petal5 flower3 yellowflower">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div>
        <div class="flower roundpetal petal5 flower4 purpleflower">
          <div class="petal">
            <div class="petal">
              <div class="petal">
              </div>
            </div>
          </div>
        </div> */}
        <div class="slope"></div>
        <div class="tree">
          <div class="leaf leaf1"></div>
          <div class="leaf leaf2"></div>


          <div class="branch left branch1">
            <div class="branch left branch-inner1">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="heart flower1 blueflower">
              </div>
            </div>
            <div class="branch left branch-inner2">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="tulip flower1 redflower">
                <div class="peak"></div>
              </div>
            </div>
            <div class="branch left branch-inner3">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>
            </div>
            <div class="flower petal5 flower1 redflower">
              <div class="petal">
                <div class="petal">
                  <div class="petal">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="branch right branch2">
            <div class="branch left branch-inner1">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>        
              <div class="leaf leaf3"></div>
              <div class="flower petal5 flower1 blueflower">
                <div class="petal">
                  <div class="petal">
                    <div class="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="branch right branch-inner2">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="tulip flower1 greenflower">
                <div class="peak"></div>
              </div>
            </div>
            <div class="branch right branch-inner3">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>
              <div class="leaf leaf3"></div>
              <div class="branch left branch-inner4">
                <div class="leaf leaf1"></div>
                <div class="flower petal5 flower1 yellowflower">
                  <div class="petal">
                    <div class="petal">
                      <div class="petal">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="tulip flower1 purpleflower">
                <div class="peak"></div>
              </div>
            </div>
            <div class="flower petal5 roundpetal flower1">
              <div class="petal">
                <div class="petal">
                  <div class="petal">
                    <div class="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="branch left branch3">
            <div class="branch right branch-inner1">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="heart flower1">
              </div>
            </div>
            <div class="branch left branch-inner2">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="tulip flower1">
                <div class="peak"></div>
              </div>
            </div>
            <div class="leaf leaf1"></div>
            <div class="leaf leaf2"></div>
            <div class="flower roundpetal petal5 flower1 purpleflower">
              <div class="petal">
                <div class="petal">
                  <div class="petal">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="branch right branch4">
            <div class="branch left branch-inner1">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>        
              <div class="leaf leaf3"></div>
              <div class="flower petal5 flower1 yellowflower">
                <div class="petal">
                  <div class="petal">
                    <div class="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="branch right branch-inner2">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="tulip tulip1 flower1 purpleflower">
                <div class="peak"></div>
              </div>
            </div>
            <div class="flower petal5 roundpetal flower1">
              <div class="petal">
                <div class="petal">
                  <div class="petal">
                    <div class="petal">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="branch left branch5">
            <div class="branch right branch-inner1">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="heart flower1">
              </div>
            </div>
            <div class="branch left branch-inner2">
              <div class="leaf leaf1"></div>
              <div class="leaf leaf2"></div>                
              <div class="leaf leaf3"></div>
              <div class="tulip flower1 greenflower">
                <div class="peak"></div>
              </div>
            </div>
            <div class="flower roundpetal petal5 flower1 blueflower">
              <div class="petal">
                <div class="petal">
                  <div class="petal">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>

            </>
        );
    }
}

export default Tree;